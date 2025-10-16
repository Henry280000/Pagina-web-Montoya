#!/bin/bash

# Script para iniciar solo el Backend de Victoria Montoya Boutique
# Script to start only the Backend of Victoria Montoya Boutique

echo "🔧 Iniciando Backend de Victoria Montoya Boutique..."
echo "🔧 Starting Victoria Montoya Boutique Backend..."
echo ""

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verificar si Python está instalado
if ! command -v python3 &> /dev/null; then
    echo -e "${YELLOW}⚠️  Python 3 no está instalado. Por favor, instala Python 3.9 o superior.${NC}"
    echo -e "${YELLOW}⚠️  Python 3 is not installed. Please install Python 3.9 or higher.${NC}"
    exit 1
fi

# Navegar al directorio backend
cd backend

# Crear entorno virtual si no existe
if [ ! -d "venv" ]; then
    echo -e "${BLUE}🐍 Creando entorno virtual de Python...${NC}"
    echo -e "${BLUE}🐍 Creating Python virtual environment...${NC}"
    python3 -m venv venv
fi

# Activar entorno virtual e instalar dependencias
echo -e "${BLUE}📦 Instalando dependencias...${NC}"
echo -e "${BLUE}📦 Installing dependencies...${NC}"
source venv/bin/activate
pip install -q -r requirements.txt

# Iniciar el servidor Flask
echo -e "${GREEN}✅ Iniciando servidor backend en http://localhost:5000${NC}"
echo -e "${GREEN}✅ Starting backend server at http://localhost:5000${NC}"
echo ""
echo -e "${BLUE}📝 Presiona Ctrl+C para detener el servidor${NC}"
echo -e "${BLUE}📝 Press Ctrl+C to stop the server${NC}"
echo ""

python app.py
