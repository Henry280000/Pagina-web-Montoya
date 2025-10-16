#!/bin/bash

# Script para iniciar solo el Frontend de Victoria Montoya Boutique
# Script to start only the Frontend of Victoria Montoya Boutique

echo "🎨 Iniciando Frontend de Victoria Montoya Boutique..."
echo "🎨 Starting Victoria Montoya Boutique Frontend..."
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

# Instalar dependencias si es necesario
if [ ! -d "node_modules" ]; then
    echo -e "${BLUE}📦 Instalando dependencias...${NC}"
    echo -e "${BLUE}📦 Installing dependencies...${NC}"
    npm install
fi

# Iniciar el servidor de desarrollo
echo -e "${GREEN}✅ Iniciando servidor frontend en http://localhost:3000${NC}"
echo -e "${GREEN}✅ Starting frontend server at http://localhost:3000${NC}"
echo ""
echo -e "${BLUE}📝 Presiona Ctrl+C para detener el servidor${NC}"
echo -e "${BLUE}📝 Press Ctrl+C to stop the server${NC}"
echo ""

npm start
