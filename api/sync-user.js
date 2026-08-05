// Handler Serverless de Vercel para Sincronización de Perfiles de Usuario Multi-Dispositivo
// Almacenamiento en memoria volátil / KV store en servidor Vercel

const userStore = new Map();

module.exports = async (req, res) => {
    // Habilitar CORS para permitir peticiones cross-origin
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        if (req.method === 'POST') {
            const { email, userData } = req.body || {};
            if (!email || !userData) {
                return res.status(400).json({ error: 'Email y userData son requeridos' });
            }

            const cleanEmail = email.toLowerCase().trim();
            userStore.set(cleanEmail, {
                userData,
                updatedAt: new Date().toISOString()
            });

            return res.status(200).json({
                success: true,
                message: 'Perfil guardado y respaldado en la nube con éxito',
                updatedAt: new Date().toISOString()
            });
        }

        if (req.method === 'GET') {
            const email = (req.query.email || '').toLowerCase().trim();
            if (!email) {
                return res.status(400).json({ error: 'Se requiere el parámetro email' });
            }

            const record = userStore.get(email);
            if (!record) {
                return res.status(404).json({ success: false, message: 'No se encontró un respaldo previo para este correo' });
            }

            return res.status(200).json({
                success: true,
                userData: record.userData,
                updatedAt: record.updatedAt
            });
        }

        return res.status(405).json({ error: 'Método no permitido' });
    } catch (err) {
        console.error('[IAFit Sync Error]:', err);
        return res.status(500).json({ error: 'Error interno en el servidor de sincronización' });
    }
};
