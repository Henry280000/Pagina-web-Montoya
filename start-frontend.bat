@echo off
REM Script para iniciar solo el Frontend en Windows
REM Script to start only the Frontend on Windows

echo.
echo ====================================================
echo   Victoria Montoya Boutique Frontend - Iniciando...
echo   Victoria Montoya Boutique Frontend - Starting...
echo ====================================================
echo.

REM Verificar si Node.js está instalado
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js no esta instalado
    echo ERROR: Node.js is not installed
    echo Por favor instala Node.js 16.x o superior
    echo Please install Node.js 16.x or higher
    pause
    exit /b 1
)

REM Instalar dependencias si es necesario
if not exist "node_modules" (
    echo Instalando dependencias...
    echo Installing dependencies...
    call npm install
)

REM Iniciar el servidor de desarrollo
echo.
echo Iniciando servidor frontend en http://localhost:3000
echo Starting frontend server at http://localhost:3000
echo.
echo Presiona Ctrl+C para detener el servidor
echo Press Ctrl+C to stop the server
echo.

call npm start

pause
