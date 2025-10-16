# Victoria Montoya Boutique

> Plataforma de comercio electrónico para moda exclusiva y elegante

[![React](https://img.shields.io/badge/React-18.2-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-5.15-blue?style=flat-square&logo=mui)](https://mui.com/)
[![Flask](https://img.shields.io/badge/Flask-3.0-black?style=flat-square&logo=flask)](https://flask.palletsprojects.com/)

**[English](#english)** | **[Español](#español)**

---

## Español

### Descripción del Proyecto

Victoria Montoya Boutique es una plataforma de comercio electrónico moderna diseñada para ofrecer una experiencia de compra elegante y fluida. El proyecto combina un frontend desarrollado en React con TypeScript y Material-UI, junto con un backend REST API construido con Flask.

### Características Principales

- **Catálogo de Productos**: Visualización completa con filtros por categoría, precio y búsqueda
- **Sistema de Carrito**: Gestión de productos con Redux Toolkit
- **Proceso de Checkout**: Integración preparada para Stripe y PayPal
- **Diseño Responsive**: Optimizado para dispositivos móviles, tablets y desktop
- **Animaciones**: Transiciones fluidas implementadas con Framer Motion
- **API RESTful**: Backend en Flask con endpoints documentados

### Tecnologías Implementadas

#### Frontend
- React 18.2
- TypeScript 5.0
- Material-UI 5.15
- Redux Toolkit 2.9
- Framer Motion 12.23
- React Router DOM 7.9
- Emotion (CSS-in-JS)

#### Backend
- Python 3.9+
- Flask 3.0
- Flask-CORS 4.0

### Requisitos Previos

- Node.js 16.x o superior
- npm 8.x o superior
- Python 3.9 o superior
- pip 21.x o superior

### Instalación y Configuración

#### 1. Clonar el Repositorio

```bash
git clone https://github.com/Henry280000/Pagina-web-Montoya.git
cd Pagina-web-Montoya
```

#### 2. Configuración del Frontend

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

La aplicación estará disponible en `http://localhost:3000`

#### 3. Configuración del Backend

```bash
# Navegar al directorio backend
cd backend

# Crear entorno virtual
python3 -m venv venv

# Activar entorno virtual
source venv/bin/activate  # macOS/Linux
# venv\Scripts\activate   # Windows

# Instalar dependencias
pip install -r requirements.txt

# Iniciar servidor Flask
python app.py
```

El servidor backend estará disponible en `http://localhost:5000`

### Scripts Disponibles

#### Frontend

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Genera build de producción
- `npm test` - Ejecuta las pruebas unitarias
- `npm run eject` - Expone configuración de Create React App

#### Backend

- `python app.py` - Inicia el servidor Flask en modo desarrollo

### Estructura del Proyecto

```
victoria-montoya-boutique/
├── backend/
│   ├── app.py                 # Servidor Flask principal
│   ├── requirements.txt       # Dependencias Python
│   └── README.md             # Documentación del backend
├── public/
│   ├── index.html            # HTML principal
│   ├── favicon.svg           # Icono del sitio
│   └── manifest.json         # PWA manifest
├── src/
│   ├── components/           # Componentes React
│   ├── store/               # Redux store y slices
│   ├── theme/               # Configuración de tema
│   ├── types/               # Definiciones TypeScript
│   ├── App.tsx              # Componente principal
│   └── index.tsx            # Punto de entrada
├── package.json             # Dependencias frontend
└── tsconfig.json           # Configuración TypeScript
```

### Documentación Adicional

- [Guía Completa](./GUIA_COMPLETA.md) - Documentación detallada del proyecto
- [Funcionalidades](./FUNCIONALIDADES.md) - Descripción de características
- [Configuración de Pagos](./CONFIGURACION_PAGOS.md) - Integración de pasarelas
- [Backend API](./backend/README.md) - Documentación de endpoints

### Licencia

Este proyecto es propiedad privada. Todos los derechos reservados.

### Contacto

Para consultas o soporte, contactar a través del repositorio de GitHub.

---

## English

### Project Description

Victoria Montoya Boutique is a modern e-commerce platform designed to deliver an elegant and seamless shopping experience. The project combines a React frontend built with TypeScript and Material-UI, alongside a REST API backend developed with Flask.

### Key Features

- **Product Catalog**: Complete visualization with filters by category, price, and search
- **Shopping Cart System**: Product management with Redux Toolkit
- **Checkout Process**: Ready integration for Stripe and PayPal
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Animations**: Smooth transitions implemented with Framer Motion
- **RESTful API**: Flask backend with documented endpoints

### Technology Stack

#### Frontend
- React 18.2
- TypeScript 5.0
- Material-UI 5.15
- Redux Toolkit 2.9
- Framer Motion 12.23
- React Router DOM 7.9
- Emotion (CSS-in-JS)

#### Backend
- Python 3.9+
- Flask 3.0
- Flask-CORS 4.0

### Prerequisites

- Node.js 16.x or higher
- npm 8.x or higher
- Python 3.9 or higher
- pip 21.x or higher

### Installation and Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/Henry280000/Pagina-web-Montoya.git
cd Pagina-web-Montoya
```

#### 2. Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The application will be available at `http://localhost:3000`

#### 3. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # macOS/Linux
# venv\Scripts\activate   # Windows

# Install dependencies
pip install -r requirements.txt

# Start Flask server
python app.py
```

The backend server will be available at `http://localhost:5000`

### Available Scripts

#### Frontend

- `npm start` - Starts development server
- `npm run build` - Generates production build
- `npm test` - Runs unit tests
- `npm run eject` - Ejects Create React App configuration

#### Backend

- `python app.py` - Starts Flask server in development mode

### Project Structure

```
victoria-montoya-boutique/
├── backend/
│   ├── app.py                 # Main Flask server
│   ├── requirements.txt       # Python dependencies
│   └── README.md             # Backend documentation
├── public/
│   ├── index.html            # Main HTML file
│   ├── favicon.svg           # Site icon
│   └── manifest.json         # PWA manifest
├── src/
│   ├── components/           # React components
│   ├── store/               # Redux store and slices
│   ├── theme/               # Theme configuration
│   ├── types/               # TypeScript definitions
│   ├── App.tsx              # Main component
│   └── index.tsx            # Entry point
├── package.json             # Frontend dependencies
└── tsconfig.json           # TypeScript configuration
```

### Additional Documentation

- [Complete Guide](./GUIA_COMPLETA.md) - Detailed project documentation (Spanish)
- [Features](./FUNCIONALIDADES.md) - Feature descriptions (Spanish)
- [Payment Configuration](./CONFIGURACION_PAGOS.md) - Gateway integration (Spanish)
- [Backend API](./backend/README.md) - Endpoint documentation

### License

This project is private property. All rights reserved.

### Contact

For inquiries or support, contact through the GitHub repository.
