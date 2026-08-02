// api/chat.js  –  Vercel Serverless Function
// Endpoint: POST /api/chat
// Puente seguro entre el frontend y la API de Gemini.
// La GEMINI_API_KEY NUNCA sale al navegador: vive solo en las variables de entorno de Vercel.

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL   = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

function sanitizeUserProfile(profile = {}) {
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
        cyclePhase:           profile.cyclePhase           || null,
        resources:            profile.resources            || 'none',
        intensity:            profile.intensity            || 'light',
        imc:                  profile.imc
    };
}

function buildSystemPrompt(userProfile, safeExercises) {
    return `Eres el asistente de entrenamiento conversacional de la app IAFit, una app de cambio físico para personas de todos los niveles.

PERFIL DEL USUARIO (ya validado por un motor de reglas de seguridad):
${JSON.stringify(userProfile)}

EJERCICIOS YA PRE-APROBADOS COMO SEGUROS PARA ESTE USUARIO (respeta esta lista, no inventes otros ni le recomiendes ejercicios fuera de ella si te pide una rutina):
${JSON.stringify(safeExercises)}

REGLAS QUE DEBES SEGUIR SIEMPRE:
1. Responde en español, en tono cálido, cercano y motivador, sin tecnicismos innecesarios.
2. Sé breve: máximo ~120 palabras por respuesta, usando saltos de línea o viñetas si ayuda a la claridad.
3. Si recomiendas ejercicios, usa SOLO los de la lista de ejercicios pre-aprobados de arriba.
4. Si el usuario tiene alguna condición cardiovascular o respiratoria distinta de "none", o pregunta por dolor agudo, mareo, dolor en el pecho, falta de aire severa u otro síntoma de alarma, indícale con claridad que debe detenerse y consultar a un profesional de salud; nunca lo diagnostiques ni minimices la situación.
5. No dosifiques medicamentos ni dietas extremas; si preguntan por eso, sugiere consultar a un nutricionista o médico.
6. Si el usuario pide algo fuera del alcance de fitness/bienestar, redirige la conversación con amabilidad hacia su entrenamiento.`;
}

function toGeminiContents(conversationHistory = [], newMessage) {
    const contents = (conversationHistory || [])
        .filter(m => m && typeof m.text === 'string')
        .slice(-8)
        .map(m => ({
            role:  m.sender === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }]
        }));
    contents.push({ role: 'user', parts: [{ text: newMessage }] });
    return contents;
}

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST')    return res.status(405).json({ error: 'Método no permitido' });

    if (!GEMINI_API_KEY) {
        return res.status(500).json({ error: 'Falta la variable de entorno GEMINI_API_KEY en Vercel.' });
    }

    const { userProfile, safeExercises, conversationHistory, message } = req.body || {};

    if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Falta el campo "message".' });
    }

    const systemPrompt = buildSystemPrompt(sanitizeUserProfile(userProfile), safeExercises || []);
    const contents     = toGeminiContents(conversationHistory, message);

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

    try {
        const geminiResponse = await fetch(url, {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                system_instruction: { parts: [{ text: systemPrompt }] },
                contents,
                generationConfig: { temperature: 0.7, maxOutputTokens: 400 }
            })
        });

        if (!geminiResponse.ok) {
            const errText = await geminiResponse.text();
            console.error('[IAFit/chat] Error Gemini:', geminiResponse.status, errText);
            return res.status(502).json({ error: 'Gemini no respondió correctamente.' });
        }

        const data  = await geminiResponse.json();
        const reply = data?.candidates?.[0]?.content?.parts?.map(p => p.text).join('') || '';

        if (!reply) return res.status(502).json({ error: 'Gemini no devolvió texto.' });

        return res.status(200).json({ reply });
    } catch (err) {
        console.error('[IAFit/chat] Error inesperado:', err);
        return res.status(500).json({ error: 'Error interno del servidor.' });
    }
}
