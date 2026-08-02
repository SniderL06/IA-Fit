// ==========================================
// IAFit Backend - Puente seguro hacia Gemini
// ==========================================
// Este servidor existe por UNA sola razón: esconder tu GEMINI_API_KEY.
// El frontend (app.js) nunca debe conocer la key; solo le habla a este
// servidor, y este servidor es quien le habla a Google.

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3001;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '*';

if (!GEMINI_API_KEY) {
    console.error('[IAFit Server] ERROR: falta GEMINI_API_KEY en tu archivo .env. Copia .env.example a .env y coloca tu key.');
}

app.use(cors({ origin: ALLOWED_ORIGIN }));
app.use(express.json({ limit: '1mb' }));

// --- Utilidades ---

// Recorta el perfil del usuario a solo lo relevante para el prompt
// (evita mandar datos de más y mantiene el prompt liviano)
function sanitizeUserProfile(profile = {}) {
    return {
        weight: profile.weight,
        height: profile.height,
        age: profile.age,
        sex: profile.sex,
        activity: profile.activity,
        isDiabetic: !!profile.isDiabetic,
        cardioCondition: profile.cardioCondition || 'none',
        respiratoryCondition: profile.respiratoryCondition || 'none',
        injuryZones: Array.isArray(profile.injuryZones) ? profile.injuryZones : [],
        cyclePhase: profile.cyclePhase || null,
        resources: profile.resources || 'none',
        intensity: profile.intensity || 'light',
        imc: profile.imc
    };
}

// Construye el prompt de sistema con reglas de seguridad fijas.
// IMPORTANTE: la seguridad real (qué ejercicios son aptos) ya se decidió en
// el frontend con el motor de reglas local. Aquí solo le pedimos a Gemini
// que converse y motive DENTRO de esa lista, nunca que la contradiga.
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

// Convierte el historial de chat del frontend (sender: 'user'|'bot')
// al formato que espera Gemini (role: 'user'|'model')
function toGeminiContents(conversationHistory = [], newMessage) {
    const contents = (conversationHistory || [])
        .filter(m => m && typeof m.text === 'string')
        .slice(-8) // solo los últimos turnos, para no inflar el prompt
        .map(m => ({
            role: m.sender === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }]
        }));

    contents.push({ role: 'user', parts: [{ text: newMessage }] });
    return contents;
}

// --- Rutas ---

app.get('/api/health', (req, res) => {
    res.json({ ok: true, geminiConfigured: !!GEMINI_API_KEY, model: GEMINI_MODEL });
});

app.post('/api/chat', async (req, res) => {
    try {
        if (!GEMINI_API_KEY) {
            return res.status(500).json({ error: 'El servidor no tiene configurada la API key de Gemini.' });
        }

        const { userProfile, safeExercises, conversationHistory, message } = req.body || {};

        if (!message || typeof message !== 'string') {
            return res.status(400).json({ error: 'Falta el campo "message".' });
        }

        const systemPrompt = buildSystemPrompt(sanitizeUserProfile(userProfile), safeExercises || []);
        const contents = toGeminiContents(conversationHistory, message);

        const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

        const geminiResponse = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                system_instruction: { parts: [{ text: systemPrompt }] },
                contents,
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 400
                }
            })
        });

        if (!geminiResponse.ok) {
            const errText = await geminiResponse.text();
            console.error('[IAFit Server] Error de Gemini:', geminiResponse.status, errText);
            return res.status(502).json({ error: 'Gemini no respondió correctamente.' });
        }

        const data = await geminiResponse.json();
        const reply = data?.candidates?.[0]?.content?.parts?.map(p => p.text).join('') || '';

        if (!reply) {
            return res.status(502).json({ error: 'Gemini no devolvió texto en la respuesta.' });
        }

        res.json({ reply });
    } catch (err) {
        console.error('[IAFit Server] Error inesperado en /api/chat:', err);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
});

// Construye el prompt de sistema para generar ideas de comidas (Fase 4 - Dieta)
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

REGLAS QUE DEBES SEGUIR SIEMPRE:
1. Responde en español, tono cercano y motivador, en formato de lista breve por comida (máximo ~180 palabras en total).
2. Usa SOLO alimentos de la lista pre-aprobada. No sugieras ingredientes fuera de ella.
3. No des gramajes clínicos exactos ni recetas médicas; da porciones generales ("un puñado", "una taza", "una porción mediana").
4. Si el perfil indica diabetes, hipertensión, o alguna condición cardíaca/respiratoria, incluye al final una línea breve recordando moderar sodio/azúcares simples según corresponda y consultar a un nutricionista o médico para un plan personalizado.
5. No des consejos médicos ni de medicación. Si la persona lo pide, redirige a un profesional de salud.
6. No sugieras dietas extremas ni calorías por debajo de la meta calórica ya calculada.`;
}

app.post('/api/diet-advice', async (req, res) => {
    try {
        if (!GEMINI_API_KEY) {
            return res.status(500).json({ error: 'El servidor no tiene configurada la API key de Gemini.' });
        }

        const { userProfile, dietPreferences, calorieTargets, safeFoods } = req.body || {};

        if (!Array.isArray(safeFoods) || safeFoods.length === 0) {
            return res.status(400).json({ error: 'No hay alimentos seguros para armar una sugerencia.' });
        }

        const systemPrompt = buildDietSystemPrompt(
            sanitizeUserProfile(userProfile),
            dietPreferences || {},
            calorieTargets || {},
            safeFoods
        );

        const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

        const geminiResponse = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                system_instruction: { parts: [{ text: systemPrompt }] },
                contents: [{ role: 'user', parts: [{ text: 'Genera el menú de ejemplo para hoy.' }] }],
                generationConfig: {
                    temperature: 0.8,
                    maxOutputTokens: 500
                }
            })
        });

        if (!geminiResponse.ok) {
            const errText = await geminiResponse.text();
            console.error('[IAFit Server] Error de Gemini (diet-advice):', geminiResponse.status, errText);
            return res.status(502).json({ error: 'Gemini no respondió correctamente.' });
        }

        const data = await geminiResponse.json();
        const suggestion = data?.candidates?.[0]?.content?.parts?.map(p => p.text).join('') || '';

        if (!suggestion) {
            return res.status(502).json({ error: 'Gemini no devolvió texto en la respuesta.' });
        }

        res.json({ suggestion });
    } catch (err) {
        console.error('[IAFit Server] Error inesperado en /api/diet-advice:', err);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
});

app.listen(PORT, () => {
    console.log(`[IAFit Server] escuchando en http://localhost:${PORT}`);
    console.log(`[IAFit Server] Gemini configurado: ${!!GEMINI_API_KEY} | modelo: ${GEMINI_MODEL}`);
});
