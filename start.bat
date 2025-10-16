@echo off
REM Script para iniciar Victoria Montoya Boutique en Windows
REM Script to start Victoria Montoya Boutique on Windows

echo.
echo ====================================================
echo   Victoria Montoya Boutique - Iniciando...
echo   Victoria Montoya Boutique - Starting...
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

REM Verificar si Python está instalado
where python >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Python no esta instalado
    echo ERROR: Python is not installed
    echo Por favor instala Python 3.9 o superior
    echo Please install Python 3.9 or higher
    pause
    exit /b 1
)

REM Instalar dependencias del frontend si es necesario
if not exist "node_modules" (
    echo Instalando dependencias del frontend...
    echo Installing frontend dependencies...
    call npm install
)

REM Configurar backend
cd backend

REM Crear entorno virtual si no existe
if not exist "venv" (
    echo Creando entorno virtual de Python...
    echo Creating Python virtual environment...
    python -m venv venv
)

REM Activar entorno virtual e instalar dependencias
echo Instalando dependencias del backend...
echo Installing backend dependencies...
call venv\Scripts\activate.bat
pip install -q -r requirements.txt

REM Iniciar el backend en una nueva ventana
echo.
echo Iniciando servidor backend en http://localhost:5000
echo Starting backend server at http://localhost:5000
start "Victoria Montoya Backend" cmd /k "cd /d %CD% && venv\Scripts\activate.bat && python app.py"

cd ..

REM Esperar un momento para que el backend inicie
timeout /t 3 /nobreak >nul

REM Iniciar el frontend
echo.
echo Iniciando servidor frontend en http://localhost:3000
echo Starting frontend server at http://localhost:3000
echo.
echo Presiona Ctrl+C en las ventanas para detener los servidores
echo Press Ctrl+C in the windows to stop the servers
echo.

call npm start

REM Si se cierra, informar al usuario
echo.
echo Servidores detenidos
echo Servers stopped
pause
