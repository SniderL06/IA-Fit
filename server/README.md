# IAFit Server

Backend mínimo cuya única responsabilidad es esconder tu `GEMINI_API_KEY` y
hacer de puente entre el frontend (app.js) y la API de Google Gemini.

## 1. Instalar y configurar

```bash
cd server
npm install
cp .env.example .env
```

Abre `.env` y coloca tu key real de Google AI Studio:

```
GEMINI_API_KEY=AIzaSy...tu_key_real...
```

## 2. Correr el servidor

```bash
npm start
```

Deberías ver algo como:

```
[IAFit Server] escuchando en http://localhost:3001
[IAFit Server] Gemini configurado: true | modelo: gemini-2.5-flash
```

## 3. Probarlo

```bash
curl http://localhost:3001/api/health
```

Debe responder `{"ok":true,"geminiConfigured":true,...}`.

## 4. Conectar el frontend

En `app.js`, la constante `AI_BACKEND_URL` apunta a `http://localhost:3001`
por defecto. Si despliegas este backend en otro lado (Render, Railway,
Vercel, tu propio VPS, etc.), cambia esa constante por tu URL real, por
ejemplo:

```js
const AI_BACKEND_URL = 'https://iafit-api.tudominio.com';
```

## 5. Qué hace y qué NO hace este backend

- **Sí hace:** recibe el perfil del usuario + la lista de ejercicios o alimentos ya
  filtrados como seguros por el motor de reglas del frontend, arma un
  prompt con reglas de seguridad fijas, y se lo manda a Gemini para que
  responda de forma conversacional en el chat de la app o para que arme
  un menú de ejemplo en la pestaña de Dieta (`POST /api/diet-advice`).
- **No hace:** no decide qué ejercicios o alimentos son médicamente seguros
  para cada persona — esa lógica vive en el frontend
  (`evaluateExerciseForUser` y `evaluateFoodForUser` en `app.js`) y **no
  depende de la IA**, precisamente para que nunca se le ocurra recomendar
  algo peligroso o fuera de las restricciones de alergias/tipo de dieta.
  Gemini solo puede conversar y elegir DENTRO de la lista que ya fue
  validada. Tampoco calcula calorías o macros: eso también lo hace el
  frontend (`calculateCalorieTargets`) con la fórmula de Mifflin-St Jeor.

## 6. Nota sobre el modelo

Google retira modelos de Gemini con cierta frecuencia. Al momento de
escribir esto, `gemini-2.5-flash` deja de estar disponible el 16 de
octubre de 2026. Antes de desplegar en producción (o si empiezas a ver
errores 404/400 desde Gemini), revisa el listado vigente en
https://ai.google.dev/gemini-api/docs/models y actualiza `GEMINI_MODEL`
en tu `.env`.

## 7. Desplegar esto de verdad (resumen rápido)

Cualquiera de estas opciones sirve porque el servidor es un Express
normal y corriente:

- **Render / Railway**: conecta el repo, define `GEMINI_API_KEY` y
  `GEMINI_MODEL` como variables de entorno en su panel, y listo.
- **Vercel (funciones serverless)**: se puede adaptar `server.js` a una
  función serverless (`api/chat.js`, `api/health.js`) fácilmente si
  prefieres ese modelo; avísame si quieres que te arme esa versión.
- **Tu propio servidor**: `pm2 start server.js` o un servicio de systemd,
  detrás de nginx con HTTPS.

En todos los casos: la key va en variables de entorno del proveedor,
**nunca en el código ni en el frontend**.
