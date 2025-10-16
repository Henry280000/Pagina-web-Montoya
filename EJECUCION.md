# 🚀 Guía de Ejecución / Execution Guide

## Victoria Montoya Boutique

Esta guía proporciona instrucciones detalladas para ejecutar la aplicación Victoria Montoya Boutique.

This guide provides detailed instructions for running the Victoria Montoya Boutique application.

---

## 🇪🇸 Español

### Inicio Rápido

La forma más sencilla de ejecutar la aplicación es usar los scripts de inicio proporcionados.

#### Ejecutar Aplicación Completa (Frontend + Backend)

**Unix/Linux/macOS:**
```bash
./start.sh
```

**Windows:**
```bash
start.bat
```

Este script:
1. ✅ Verifica que Node.js y Python estén instalados
2. ✅ Instala automáticamente las dependencias si no existen
3. ✅ Inicia el backend en `http://localhost:5000`
4. ✅ Inicia el frontend en `http://localhost:3000`
5. ✅ Maneja ambos servidores simultáneamente

Para detener: Presiona `Ctrl+C`

#### Ejecutar Solo Frontend

Si solo necesitas el frontend (por ejemplo, para trabajar en el diseño):

**Unix/Linux/macOS:**
```bash
./start-frontend.sh
```

**Windows:**
```bash
start-frontend.bat
```

El frontend estará disponible en `http://localhost:3000`

#### Ejecutar Solo Backend

Si solo necesitas el backend (por ejemplo, para pruebas de API):

**Unix/Linux/macOS:**
```bash
./start-backend.sh
```

**Windows:**
```bash
start-backend.bat
```

El backend estará disponible en `http://localhost:5000`

### Requisitos del Sistema

Antes de ejecutar la aplicación, asegúrate de tener instalado:

- **Node.js** 16.x o superior → [Descargar](https://nodejs.org/)
- **npm** 8.x o superior (incluido con Node.js)
- **Python** 3.9 o superior → [Descargar](https://www.python.org/)
- **pip** 21.x o superior (incluido con Python)

### Verificar Instalaciones

```bash
# Verificar Node.js
node --version

# Verificar npm
npm --version

# Verificar Python
python3 --version

# Verificar pip
pip --version
```

### Permisos en Unix/Linux/macOS

Si obtienes un error de permisos al ejecutar los scripts `.sh`, hazlos ejecutables:

```bash
chmod +x start.sh start-frontend.sh start-backend.sh
```

### Solución de Problemas

#### Puerto en Uso

Si el puerto 3000 o 5000 ya está en uso:

**Frontend (puerto 3000):**
- El navegador preguntará si deseas usar otro puerto
- Acepta para usar el siguiente disponible (generalmente 3001)

**Backend (puerto 5000):**
- Edita `backend/app.py` y cambia:
  ```python
  app.run(debug=True, port=5001)  # Cambia 5000 a 5001
  ```

#### Dependencias No Instaladas

Si encuentras errores de módulos no encontrados:

**Frontend:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Backend:**
```bash
cd backend
rm -rf venv
python3 -m venv venv
source venv/bin/activate  # macOS/Linux
pip install -r requirements.txt
```

#### Python no Encontrado en Windows

Si `python3` no funciona en Windows, intenta:
```bash
python --version
```

Usa `python` en lugar de `python3` en los comandos.

### URLs de la Aplicación

Una vez iniciada:

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Docs**: http://localhost:5000 (información de endpoints)
- **Health Check**: http://localhost:5000/api/health

---

## 🇺🇸 English

### Quick Start

The easiest way to run the application is using the provided startup scripts.

#### Run Complete Application (Frontend + Backend)

**Unix/Linux/macOS:**
```bash
./start.sh
```

**Windows:**
```bash
start.bat
```

This script:
1. ✅ Verifies Node.js and Python are installed
2. ✅ Automatically installs dependencies if they don't exist
3. ✅ Starts backend at `http://localhost:5000`
4. ✅ Starts frontend at `http://localhost:3000`
5. ✅ Manages both servers simultaneously

To stop: Press `Ctrl+C`

#### Run Frontend Only

If you only need the frontend (e.g., for design work):

**Unix/Linux/macOS:**
```bash
./start-frontend.sh
```

**Windows:**
```bash
start-frontend.bat
```

Frontend will be available at `http://localhost:3000`

#### Run Backend Only

If you only need the backend (e.g., for API testing):

**Unix/Linux/macOS:**
```bash
./start-backend.sh
```

**Windows:**
```bash
start-backend.bat
```

Backend will be available at `http://localhost:5000`

### System Requirements

Before running the application, ensure you have:

- **Node.js** 16.x or higher → [Download](https://nodejs.org/)
- **npm** 8.x or higher (included with Node.js)
- **Python** 3.9 or higher → [Download](https://www.python.org/)
- **pip** 21.x or higher (included with Python)

### Verify Installations

```bash
# Check Node.js
node --version

# Check npm
npm --version

# Check Python
python3 --version

# Check pip
pip --version
```

### Permissions on Unix/Linux/macOS

If you get a permissions error when running `.sh` scripts, make them executable:

```bash
chmod +x start.sh start-frontend.sh start-backend.sh
```

### Troubleshooting

#### Port Already in Use

If port 3000 or 5000 is already in use:

**Frontend (port 3000):**
- Browser will ask if you want to use another port
- Accept to use the next available one (usually 3001)

**Backend (port 5000):**
- Edit `backend/app.py` and change:
  ```python
  app.run(debug=True, port=5001)  # Change 5000 to 5001
  ```

#### Dependencies Not Installed

If you encounter module not found errors:

**Frontend:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Backend:**
```bash
cd backend
rm -rf venv
python3 -m venv venv
source venv/bin/activate  # macOS/Linux
pip install -r requirements.txt
```

#### Python Not Found on Windows

If `python3` doesn't work on Windows, try:
```bash
python --version
```

Use `python` instead of `python3` in commands.

### Application URLs

Once started:

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Docs**: http://localhost:5000 (endpoint information)
- **Health Check**: http://localhost:5000/api/health

---

## 📝 Notas Adicionales / Additional Notes

### Modo Desarrollo / Development Mode

Los scripts inician la aplicación en modo desarrollo:
- Frontend: Hot reload activo (cambios en código se reflejan automáticamente)
- Backend: Debug mode activado (auto-reload en cambios)

The scripts start the application in development mode:
- Frontend: Hot reload active (code changes reflect automatically)
- Backend: Debug mode enabled (auto-reload on changes)

### Modo Producción / Production Mode

Para producción, consulta la documentación completa en README.md

For production, see complete documentation in README.md

---

## 🆘 Soporte / Support

Si encuentras problemas:
1. Verifica los requisitos del sistema
2. Revisa la sección de solución de problemas
3. Consulta el README.md principal
4. Abre un issue en GitHub

If you encounter issues:
1. Check system requirements
2. Review troubleshooting section
3. Consult main README.md
4. Open an issue on GitHub
