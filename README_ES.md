# 🛍️ Victoria Montoya Boutique

Una elegante página web de comercio electrónico para la boutique de moda de lujo Victoria Montoya, desarrollada con React, TypeScript, Material UI y Redux Toolkit.

![Victoria Montoya Boutique](https://img.shields.io/badge/Victoria%20Montoya-Boutique-gold)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Material UI](https://img.shields.io/badge/Material%20UI-5-blue)

## ✨ Características

- 🎨 **Diseño Elegante**: Interfaz moderna con animaciones fluidas usando Framer Motion
- 🛒 **Sistema de Carrito**: Gestión completa con Redux Toolkit
- 📱 **Responsive**: Totalmente adaptado a todos los dispositivos
- 🎭 **Animaciones**: Efectos visuales sofisticados y transiciones suaves
- 🎨 **Material UI**: Componentes profesionales con tema personalizado
- ⚡ **TypeScript**: Código robusto con tipado estático
- 🐍 **Backend Python**: API REST con Flask (opcional)

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca principal
- **TypeScript** - Tipado estático
- **Material UI v5** - Componentes de interfaz
- **Redux Toolkit** - Gestión de estado
- **Framer Motion** - Animaciones
- **Emotion** - CSS-in-JS

### Backend (Opcional)
- **Python 3** - Lenguaje del servidor
- **Flask** - Framework web
- **Flask-CORS** - Manejo de CORS

## 📦 Instalación

### Prerrequisitos
- Node.js 16+ y npm
- Python 3.8+ (para el backend)

### 1. Clonar e instalar dependencias del Frontend

```bash
cd victoria-montoya-boutique
npm install
```

### 2. Iniciar el servidor de desarrollo

```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000`

### 3. Configurar Backend Python (Opcional)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # En macOS/Linux
# venv\Scripts\activate   # En Windows
pip install -r requirements.txt
python app.py
```

El backend estará disponible en `http://localhost:5000`

## 📚 Librerías Instaladas

### Producción
```json
{
  "@mui/material": "Componentes UI profesionales",
  "@mui/icons-material": "Iconos de Material Design",
  "@emotion/react": "CSS-in-JS",
  "@emotion/styled": "Componentes estilizados",
  "@reduxjs/toolkit": "Gestión de estado",
  "react-redux": "Bindings de Redux para React",
  "framer-motion": "Animaciones avanzadas",
  "react-router-dom": "Enrutamiento"
}
```

### Backend Python
```
flask==3.0.0
flask-cors==4.0.0
python-dotenv==1.0.0
```

## 🎯 Extensiones Recomendadas de VS Code

Para una mejor experiencia de desarrollo, instala estas extensiones:

1. **ES7+ React/Redux/React-Native snippets** (`dsznajder.es7-react-js-snippets`)
2. **TypeScript Hero** (`rbbit.typescript-hero`)
3. **Material Icon Theme** (`PKief.material-icon-theme`)
4. **Prettier - Code formatter** (`esbenp.prettier-vscode`)
5. **ESLint** (`dbaeumer.vscode-eslint`)
6. **Python** (`ms-python.python`)
7. **Pylance** (`ms-python.vscode-pylance`)
8. **Auto Rename Tag** (`formulahendry.auto-rename-tag`)
9. **GitLens** (`eamodio.gitlens`)

### Instalar extensiones desde VS Code:
```
Cmd/Ctrl + Shift + P → "Extensions: Install Extensions"
```

## 📁 Estructura del Proyecto

```
victoria-montoya-boutique/
├── public/              # Archivos públicos
├── src/
│   ├── components/      # Componentes React
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── FeaturedProducts.tsx
│   │   └── Features.tsx
│   ├── store/          # Redux Store
│   │   ├── store.ts
│   │   ├── cartSlice.ts
│   │   └── hooks.ts
│   ├── theme/          # Tema de Material UI
│   │   └── theme.ts
│   ├── types/          # Tipos TypeScript
│   │   └── index.ts
│   ├── App.tsx         # Componente principal
│   └── index.tsx       # Punto de entrada
├── backend/            # Backend Python (opcional)
│   ├── app.py         # Servidor Flask
│   ├── requirements.txt
│   └── README.md
└── package.json
```

## 🎨 Paleta de Colores

- **Principal**: #2c2c2c (Negro elegante)
- **Secundario**: #d4af37 (Dorado)
- **Fondo**: #fafafa (Gris claro)
- **Texto**: #2c2c2c (Negro suave)

## 🛠️ Scripts Disponibles

```bash
npm start          # Iniciar servidor de desarrollo
npm test           # Ejecutar pruebas
npm run build      # Compilar para producción
npm run eject      # Exponer configuración (no reversible)
```

## 🌐 Funcionalidades Principales

### Página de Inicio
- Hero section con animaciones
- Productos destacados con efectos hover
- Características de la boutique
- Diseño responsive

### Sistema de Carrito
- Agregar productos al carrito
- Gestión de cantidades
- Cálculo automático de totales
- Estado persistente con Redux

### Backend API
- Endpoints RESTful
- Gestión de productos
- Creación de órdenes
- Filtrado por categorías

## 🚀 Próximas Características

- [ ] Página de detalle de producto
- [ ] Filtros avanzados
- [ ] Sistema de búsqueda
- [ ] Integración con pasarela de pago
- [ ] Sistema de autenticación
- [ ] Panel de administración
- [ ] Base de datos real
- [ ] Modo oscuro

## 📝 Notas de Desarrollo

- La aplicación usa **Playfair Display** y **Roboto** como fuentes principales
- Las imágenes de productos son de Unsplash (reemplazar con imágenes reales)
- El backend es opcional y puede conectarse fácilmente al frontend
- El estado del carrito se mantiene mientras la aplicación está abierta

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y pertenece a Victoria Montoya Boutique.

## 📧 Contacto

Victoria Montoya Boutique - [@victoriamontoya](https://twitter.com/victoriamontoya)

---

Hecho con ❤️ y ☕ para Victoria Montoya Boutique
