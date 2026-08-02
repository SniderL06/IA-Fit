# IAFit 🏋️ — Tu Entrenador Personal con IA

App de cambio físico para cualquier persona. Rutinas personalizadas con Gemini AI, adaptadas a tu peso, altura, condiciones de salud (diabetes, hipertensión, etc.) y nivel de actividad.

---

## 🚀 Inicio Rápido (Local)

**Doble clic en `iniciar-iafit.bat`** — abre el backend y el frontend automáticamente.

- Frontend → http://localhost:8080
- Backend (API) → http://localhost:3001

> La primera vez instala dependencias automáticamente.

---

## ☁️ Desplegar en Vercel

### Opción A — Desde la web (sin Git, más fácil)

1. Ve a [vercel.com](https://vercel.com) e inicia sesión.
2. En el dashboard haz clic en **"Add New → Project"**.
3. Elige **"Upload from your computer"** o arrastra la carpeta `ia_fit_app`.
   > **Importante:** NO incluyas la carpeta `server/node_modules` ni `server/.env` al comprimir.
4. Cuando Vercel muestre la configuración del proyecto, deja todo como está (detecta el `vercel.json` automáticamente).
5. **Agrega la variable de entorno:**
   - Nombre: `GEMINI_API_KEY`
   - Valor: `AIzaSyCdPDpBgl9jT7b180ax5J1Z5dJi-wzp9WU`
   - (Opcionalmente agrega `GEMINI_MODEL` = `gemini-2.5-flash`)
6. Clic en **"Deploy"** — en ~30 segundos tendrás tu URL pública.

---

### Opción B — Desde GitHub (recomendado para actualizaciones futuras)

#### Paso 1 — Instalar Git (si no lo tienes)
Descarga en: https://git-scm.com/download/win — instala con opciones por defecto.

#### Paso 2 — Subir a GitHub
Abre **Git Bash** (clic derecho en la carpeta `ia_fit_app` → "Git Bash Here") y ejecuta:

```bash
git init
git add .
git commit -m "IAFit v1 - Listo para producción"
```

Luego ve a [github.com/new](https://github.com/new), crea un repositorio (puede ser privado) y sigue las instrucciones para conectar tu repo local.

#### Paso 3 — Conectar con Vercel
1. En [vercel.com](https://vercel.com) → **"Add New → Project"**
2. Importa tu repo de GitHub.
3. **Agrega la variable de entorno** `GEMINI_API_KEY` con tu key.
4. Clic en **"Deploy"**.

Cada vez que hagas `git push`, Vercel desplegará automáticamente.

---

## 🔑 Variables de Entorno (Vercel)

| Variable | Valor | Obligatoria |
|---|---|---|
| `GEMINI_API_KEY` | Tu key de Google AI Studio | ✅ Sí |
| `GEMINI_MODEL` | `gemini-2.5-flash` | No (por defecto) |

> ⚠️ **NUNCA** subas el archivo `server/.env` a GitHub. El `.gitignore` ya lo excluye.

---

## 📁 Estructura del Proyecto

```
ia_fit_app/
├── api/                   ← Serverless functions para Vercel
│   ├── chat.js            ← Chat con Gemini AI
│   ├── diet-advice.js     ← Sugerencias de menú con IA
│   └── health.js          ← Estado del servicio
├── server/                ← Servidor Express para desarrollo local
│   ├── server.js
│   ├── .env               ← Tu API key (NO subir a Git)
│   └── .env.example
├── index.html             ← App principal
├── styles.css             ← Estilos (tema oscuro / glassmorphism)
├── app.js                 ← Lógica completa de la app
├── vercel.json            ← Configuración de despliegue
├── iniciar-iafit.bat      ← Inicio rápido local (doble clic)
└── .gitignore
```

---

## 🩺 Condiciones de salud soportadas

- Diabetes / Control de glucosa
- Hipertensión / Presión alta
- Arritmia, Insuficiencia cardíaca, Post-infarto
- Asma, EPOC
- Lesiones por zona (rodilla, cadera, espalda, cuello, muñecas, tobillos)
- Seguimiento de ciclo menstrual

---

## 📖 Tecnologías

- **Frontend:** HTML5, CSS3 (Vanilla), JavaScript (ES2022)
- **Backend local:** Node.js + Express
- **Producción:** Vercel Serverless Functions
- **IA:** Google Gemini 2.5 Flash
- **Iconos:** Lucide Icons
- **Fuentes:** Outfit (Google Fonts)
