// api/diet-advice.js  –  Vercel Serverless Function
// Endpoint: POST /api/diet-advice

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL   = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

function sanitizeUserProfile(profile) {
    profile = profile || {};
    return {
        weight:               profile.weight,
        height:               profile.height,
        age:                  profile.age,
        sex:                  profile.sex,
        activity:             profile.activity,
        isDiabetic:           !!profile.isDiabetic,
        cardioCondition:      profile.cardioCondition      || 'none',
        respiratoryCondition: profile.respiratoryCondition || 'none',
        injuryZones:          Array.isArray(profile.injuryZones) ? profile.injuryZones : [],
        resources:            profile.resources            || 'none',
        intensity:            profile.intensity            || 'light',
        imc:                  profile.imc
    };
}

function buildDietSystemPrompt(userProfile, dietPreferences, calorieTargets, safeFoods) {
    return `Eres el asistente de nutrición conversacional de la app IAFit.

PERFIL DE SALUD DEL USUARIO:
${JSON.stringify(userProfile)}

PREFERENCIAS DE DIETA:
${JSON.stringify(dietPreferences)}

META CALÓRICA Y DE MACROS YA CALCULADA (no la recalcules, úsala tal cual):
${JSON.stringify(calorieTargets)}

ALIMENTOS YA PRE-APROBADOS (respetan su tipo de alimentación y sus alergias/intolerancias). SOLO puedes usar alimentos de esta lista para armar el menú, no inventes otros:
${JSON.stringify(safeFoods)}

TU TAREA: proponer un menú de ejemplo para UN día (desayuno, almuerzo, cena y snacks según la cantidad de comidas indicada en las preferencias), usando ÚNICAMENTE alimentos de la lista pre-aprobada, distribuidos de forma razonable para acercarse a la meta calórica.

REGLAS:
1. Responde en español, tono cercano y motivador, en formato de lista breve por comida (máximo ~180 palabras en total).
2. Usa SOLO alimentos de la lista pre-aprobada.
3. No des gramajes clínicos exactos; da porciones generales ("un puñado", "una taza", "una porción mediana").
4. Si el perfil indica diabetes, hipertensión, o alguna condición cardíaca/respiratoria, incluye al final una línea breve recordando moderar sodio/azúcares simples y consultar a un nutricionista o médico.
5. No des consejos médicos ni de medicación.
6. No sugieras dietas extremas ni calorías por debajo de la meta calórica ya calculada.`;
}

module.exports = async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST')    return res.status(405).json({ error: 'Método no permitido' });

    if (!GEMINI_API_KEY) {
        return res.status(500).json({ error: 'Falta la variable de entorno GEMINI_API_KEY en Vercel.' });
    }

    const body = req.body || {};
    const safeFoods = body.safeFoods;

    if (!Array.isArray(safeFoods) || safeFoods.length === 0) {
        return res.status(400).json({ error: 'No hay alimentos seguros para armar una sugerencia.' });
    }

    const systemPrompt = buildDietSystemPrompt(
        sanitizeUserProfile(body.userProfile),
        body.dietPreferences  || {},
        body.calorieTargets   || {},
        safeFoods
    );

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/' + GEMINI_MODEL + ':generateContent?key=' + GEMINI_API_KEY;

    try {
        const geminiResponse = await fetch(url, {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                system_instruction: { parts: [{ text: systemPrompt }] },
                contents: [{ role: 'user', parts: [{ text: 'Genera el menú de ejemplo para hoy.' }] }],
                generationConfig: { temperature: 0.8, maxOutputTokens: 500 }
            })
        });

        if (!geminiResponse.ok) {
            const errText = await geminiResponse.text();
            console.error('[IAFit/diet-advice] Error Gemini:', geminiResponse.status, errText);
            return res.status(502).json({ error: 'Gemini no respondió correctamente.' });
        }

        const data       = await geminiResponse.json();
        const suggestion = (data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts)
            ? data.candidates[0].content.parts.map(function(p) { return p.text; }).join('')
            : '';

        if (!suggestion) return res.status(502).json({ error: 'Gemini no devolvió texto.' });

        return res.status(200).json({ suggestion: suggestion });
    } catch (err) {
        console.error('[IAFit/diet-advice] Error inesperado:', err);
        return res.status(500).json({ error: 'Error interno del servidor.' });
    }
};
