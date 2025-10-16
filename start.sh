#!/bin/bash

# Script para iniciar Victoria Montoya Boutique (Frontend + Backend)
# Script to start Victoria Montoya Boutique (Frontend + Backend)

echo "🛍️  Iniciando Victoria Montoya Boutique..."
echo "🛍️  Starting Victoria Montoya Boutique..."
echo ""

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}⚠️  Node.js no está instalado. Por favor, instala Node.js 16.x o superior.${NC}"
    echo -e "${YELLOW}⚠️  Node.js is not installed. Please install Node.js 16.x or higher.${NC}"
    exit 1
fi

# Verificar si Python está instalado
if ! command -v python3 &> /dev/null; then
    echo -e "${YELLOW}⚠️  Python 3 no está instalado. Por favor, instala Python 3.9 o superior.${NC}"
    echo -e "${YELLOW}⚠️  Python 3 is not installed. Please install Python 3.9 or higher.${NC}"
    exit 1
fi

# Instalar dependencias del frontend si es necesario
if [ ! -d "node_modules" ]; then
    echo -e "${BLUE}📦 Instalando dependencias del frontend...${NC}"
    echo -e "${BLUE}📦 Installing frontend dependencies...${NC}"
    npm install
fi

# Configurar backend
cd backend

# Crear entorno virtual si no existe
if [ ! -d "venv" ]; then
    echo -e "${BLUE}🐍 Creando entorno virtual de Python...${NC}"
    echo -e "${BLUE}🐍 Creating Python virtual environment...${NC}"
    python3 -m venv venv
fi

# Activar entorno virtual e instalar dependencias
echo -e "${BLUE}📦 Instalando dependencias del backend...${NC}"
echo -e "${BLUE}📦 Installing backend dependencies...${NC}"
source venv/bin/activate
pip install -q -r requirements.txt

# Iniciar el backend en segundo plano
echo -e "${GREEN}✅ Iniciando servidor backend en http://localhost:5000${NC}"
echo -e "${GREEN}✅ Starting backend server at http://localhost:5000${NC}"
python app.py &
BACKEND_PID=$!

cd ..

# Esperar un momento para que el backend inicie
sleep 3

# Iniciar el frontend
echo -e "${GREEN}✅ Iniciando servidor frontend en http://localhost:3000${NC}"
echo -e "${GREEN}✅ Starting frontend server at http://localhost:3000${NC}"
echo ""
echo -e "${BLUE}📝 Presiona Ctrl+C para detener ambos servidores${NC}"
echo -e "${BLUE}📝 Press Ctrl+C to stop both servers${NC}"
echo ""

# Función para limpiar procesos al salir
cleanup() {
    echo ""
    echo -e "${YELLOW}🛑 Deteniendo servidores...${NC}"
    echo -e "${YELLOW}🛑 Stopping servers...${NC}"
    kill $BACKEND_PID 2>/dev/null
    exit 0
}

trap cleanup SIGINT SIGTERM

# Iniciar frontend (este bloqueará hasta que se detenga)
npm start

# Si npm start termina, también detener el backend
cleanup
