@echo off
REM Script para iniciar solo el Backend en Windows
REM Script to start only the Backend on Windows

echo.
echo ====================================================
echo   Victoria Montoya Boutique Backend - Iniciando...
echo   Victoria Montoya Boutique Backend - Starting...
echo ====================================================
echo.

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

REM Navegar al directorio backend
cd backend

REM Crear entorno virtual si no existe
if not exist "venv" (
    echo Creando entorno virtual de Python...
    echo Creating Python virtual environment...
    python -m venv venv
)

REM Activar entorno virtual e instalar dependencias
echo Instalando dependencias...
echo Installing dependencies...
call venv\Scripts\activate.bat
pip install -q -r requirements.txt

REM Iniciar el servidor Flask
echo.
echo Iniciando servidor backend en http://localhost:5000
echo Starting backend server at http://localhost:5000
echo.
echo Presiona Ctrl+C para detener el servidor
echo Press Ctrl+C to stop the server
echo.

python app.py

pause
