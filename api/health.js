// api/health.js  –  Vercel Serverless Function
// Endpoint: GET /api/health

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL   = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

module.exports = function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({
        ok: true,
        geminiConfigured: !!GEMINI_API_KEY,
        model: GEMINI_MODEL
    });
};
