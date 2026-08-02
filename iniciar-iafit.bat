@echo off
title IAFit - Iniciando...
color 0B

echo.
echo  ========================================
echo    IAFit - Iniciando Servidores
echo  ========================================
echo.

:: Verificar que Node.js esté instalado
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js no está instalado. Descargalo en https://nodejs.org
    pause
    exit /b 1
)

:: Verificar dependencias del servidor
if not exist "%~dp0server\node_modules" (
    echo [INFO] Instalando dependencias del servidor por primera vez...
    cd /d "%~dp0server"
    npm.cmd install
    echo [OK] Dependencias instaladas.
    echo.
)

:: Matar procesos anteriores en los puertos 3001 y 8080 (si quedaron colgados)
echo [INFO] Liberando puertos 3001 y 8080...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":3001 " 2^>nul') do (
    taskkill /F /PID %%a >nul 2>&1
)
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":8080 " 2^>nul') do (
    taskkill /F /PID %%a >nul 2>&1
)

:: Iniciar Backend (Gemini AI) en ventana separada
echo [INFO] Iniciando Backend (IA Gemini) en puerto 3001...
start "IAFit - Backend (IA)" cmd /k "title IAFit Backend ^& color 0A ^& cd /d "%~dp0server" ^& echo  [Backend] Corriendo en http://localhost:3001 ^& node server.js"

:: Esperar a que el backend arranque
timeout /t 2 /nobreak >nul

:: Iniciar servidor de archivos estáticos (Frontend) en ventana separada
echo [INFO] Iniciando Frontend en puerto 8080...
start "IAFit - Frontend" cmd /k "title IAFit Frontend ^& color 0B ^& cd /d "%~dp0" ^& echo  [Frontend] Corriendo en http://localhost:8080 ^& node -e \"const http=require('http'),fs=require('fs'),path=require('path'),mime={'html':'text/html','css':'text/css','js':'application/javascript','svg':'image/svg+xml','png':'image/png','ico':'image/x-icon'};http.createServer((req,res)=>{let f=path.join('.',req.url==='/'?'index.html':req.url);fs.readFile(f,(err,data)=>{if(err){res.writeHead(404);res.end();return;}res.writeHead(200,{'Content-Type':mime[path.extname(f).slice(1)]||'text/plain'});res.end(data);});}).listen(8080,()=>console.log('[Frontend] Servidor listo en http://localhost:8080'));\""

:: Esperar un poco más para que ambos estén listos
timeout /t 2 /nobreak >nul

:: Abrir el navegador
echo [INFO] Abriendo IAFit en el navegador...
start "" "http://localhost:8080"

echo.
echo  ========================================
echo    Todo listo!
echo    Frontend:  http://localhost:8080
echo    Backend:   http://localhost:3001
echo  ========================================
echo.
echo  Cierra las ventanas de consola para detener los servidores.
echo  O presiona cualquier tecla para cerrar ESTE mensaje.
echo.
pause >nul
