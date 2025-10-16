# Victoria Montoya Boutique - Documentación en Español

## Índice

1. [Descripción General](#descripción-general)
2. [Tecnologías](#tecnologías)
3. [Requisitos del Sistema](#requisitos-del-sistema)
4. [Instalación](#instalación)
5. [Configuración](#configuración)
6. [Uso](#uso)
7. [Estructura del Proyecto](#estructura-del-proyecto)
8. [Funcionalidades](#funcionalidades)
9. [API Backend](#api-backend)
10. [Despliegue](#despliegue)
11. [Mantenimiento](#mantenimiento)

## Descripción General

Victoria Montoya Boutique es una plataforma de comercio electrónico completa desarrollada para la venta de moda exclusiva. El sistema implementa las mejores prácticas de desarrollo web moderno, combinando un frontend reactivo con un backend robusto.

### Objetivos del Proyecto

- Proporcionar una experiencia de compra fluida y elegante
- Gestionar eficientemente el inventario de productos
- Procesar transacciones de manera segura
- Ofrecer una interfaz responsive y accesible
- Mantener un código escalable y mantenible

## Tecnologías

### Stack Frontend

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| React | 18.2 | Framework principal de UI |
| TypeScript | 5.0 | Tipado estático y seguridad |
| Material-UI | 5.15 | Componentes de interfaz |
| Redux Toolkit | 2.9 | Gestión de estado global |
| Framer Motion | 12.23 | Animaciones y transiciones |
| React Router | 7.9 | Enrutamiento de aplicación |
| Emotion | 11.14 | Estilos CSS-in-JS |

### Stack Backend

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Python | 3.9+ | Lenguaje del servidor |
| Flask | 3.0 | Framework web |
| Flask-CORS | 4.0 | Manejo de CORS |

## Requisitos del Sistema

### Hardware Mínimo

- Procesador: 2 GHz o superior
- RAM: 4 GB
- Disco: 500 MB libres

### Software Requerido

- Node.js 16.x o superior
- npm 8.x o superior
- Python 3.9 o superior
- pip 21.x o superior
- Git 2.x

### Navegadores Soportados

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Instalación

### Paso 1: Clonar Repositorio

```bash
git clone https://github.com/Henry280000/Pagina-web-Montoya.git
cd Pagina-web-Montoya
```

### Paso 2: Instalar Dependencias Frontend

```bash
npm install
```

Esto instalará aproximadamente 1,500 paquetes y puede tomar varios minutos.

### Paso 3: Configurar Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# Frontend
REACT_APP_API_URL=http://localhost:5000
REACT_APP_STRIPE_PUBLIC_KEY=pk_test_...
REACT_APP_PAYPAL_CLIENT_ID=...

# Backend
FLASK_ENV=development
FLASK_DEBUG=True
SECRET_KEY=tu-clave-secreta-segura
DATABASE_URL=sqlite:///boutique.db
```

### Configuración de Desarrollo

Para desarrollo local, las configuraciones por defecto son suficientes. El frontend se conectará automáticamente a `http://localhost:5000` para el backend.

### Configuración de Producción

Para producción, asegúrate de:

1. Cambiar `FLASK_DEBUG` a `False`
2. Usar una base de datos persistente (PostgreSQL recomendado)
3. Configurar HTTPS
4. Establecer claves de API de producción para Stripe/PayPal
5. Configurar CORS apropiadamente

## Uso

### Desarrollo

#### Iniciar Frontend

```bash
npm start
```

Disponible en: `http://localhost:3000`

#### Iniciar Backend

```bash
cd backend
source venv/bin/activate
python app.py
```

Disponible en: `http://localhost:5000`

### Pruebas

```bash
# Pruebas unitarias
npm test

# Pruebas con cobertura
npm test -- --coverage

# Pruebas E2E
npm run test:e2e
```

### Compilación para Producción

```bash
npm run build
```

Genera una carpeta `build/` optimizada para producción.

## Estructura del Proyecto

```
victoria-montoya-boutique/
│
├── backend/
│   ├── app.py                    # Servidor Flask principal
│   ├── requirements.txt          # Dependencias Python
│   └── README.md                # Documentación del backend
│
├── public/
│   ├── index.html               # Template HTML
│   ├── favicon.svg              # Icono del sitio
│   ├── manifest.json            # Configuración PWA
│   └── robots.txt               # SEO
│
├── src/
│   ├── components/              # Componentes React
│   │   ├── Navbar.tsx
│   │   ├── ProductCatalog.tsx
│   │   ├── CartDrawer.tsx
│   │   ├── CheckoutModal.tsx
│   │   └── ...
│   │
│   ├── store/                   # Redux Store
│   │   ├── store.ts            # Configuración del store
│   │   ├── cartSlice.ts        # Slice del carrito
│   │   ├── filtersSlice.ts     # Slice de filtros
│   │   └── hooks.ts            # Hooks personalizados
│   │
│   ├── theme/                   # Configuración de tema
│   │   └── theme.ts
│   │
│   ├── types/                   # Definiciones TypeScript
│   │   └── index.ts
│   │
│   ├── App.tsx                  # Componente principal
│   ├── index.tsx                # Punto de entrada
│   └── index.css                # Estilos globales
│
├── package.json                 # Dependencias y scripts
├── tsconfig.json               # Configuración TypeScript
├── .gitignore                  # Archivos ignorados por Git
├── README.md                   # Documentación principal
└── README_ES.md                # Esta documentación
```

## Funcionalidades

### Catálogo de Productos

- Visualización en grid responsive
- Filtrado por categoría
- Búsqueda por nombre/descripción
- Ordenamiento por precio
- Visualización de stock disponible
- Imágenes optimizadas con lazy loading

### Sistema de Carrito

- Agregar/eliminar productos
- Ajustar cantidades
- Cálculo automático de totales
- Persistencia en Redux
- Animaciones de feedback
- Validación de stock

### Proceso de Checkout

- Formulario de información del cliente
- Selección de dirección de envío
- Múltiples métodos de pago
- Validación de datos
- Confirmación de orden
- Generación de ID único

### Gestión de Pagos

- Integración con Stripe (preparada)
- Integración con PayPal (preparada)
- Procesamiento simulado para desarrollo
- Validación de tarjetas
- Manejo seguro de datos sensibles

## API Backend

### Arquitectura

El backend sigue un patrón RESTful con las siguientes características:

- Rutas claramente definidas
- Respuestas en formato JSON
- Códigos de estado HTTP apropiados
- Manejo centralizado de errores
- Validación de datos de entrada

### Endpoints Principales

Ver [documentación completa del backend](./backend/README.md) para detalles.

#### Productos

- `GET /api/products` - Lista todos los productos
- `GET /api/products/:id` - Obtiene un producto específico
- `GET /api/products/category/:category` - Filtra por categoría

#### Órdenes

- `POST /api/orders` - Crea una nueva orden
- `GET /api/orders` - Lista todas las órdenes
- `GET /api/orders/:id` - Obtiene una orden específica

#### Pagos

- `POST /api/payment/process` - Procesa pago con tarjeta
- `POST /api/payment/paypal/create` - Crea orden PayPal
- `POST /api/payment/paypal/execute` - Ejecuta pago PayPal

#### Utilidades

- `GET /` - Información de la API
- `GET /api/health` - Estado del servidor

## Despliegue

### Frontend (Vercel/Netlify)

```bash
# Compilar
npm run build

# Desplegar a Vercel
vercel --prod

# O desplegar a Netlify
netlify deploy --prod
```

### Backend (Heroku/Railway)

```bash
# Crear Procfile
echo "web: gunicorn app:app" > Procfile

# Desplegar
git push heroku main
```

### Docker

```dockerfile
# Dockerfile para frontend
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npx", "serve", "-s", "build"]
```

```dockerfile
# Dockerfile para backend
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python", "app.py"]
```

## Mantenimiento

### Actualización de Dependencias

```bash
# Frontend
npm update
npm audit fix

# Backend
pip list --outdated
pip install -U package_name
```

### Monitoreo

Implementar herramientas de monitoreo:

- Sentry para tracking de errores
- Google Analytics para métricas de uso
- New Relic para performance
- LogRocket para sesiones de usuario

### Respaldo

Realizar respaldos periódicos de:

- Base de datos de órdenes
- Imágenes de productos
- Configuraciones del servidor
- Logs de aplicación

### Optimización

Revisar periódicamente:

- Tamaño del bundle de JavaScript
- Tiempo de carga de imágenes
- Rendimiento de queries a la base de datos
- Uso de memoria del servidor

## Documentación Adicional

- [Funcionalidades Detalladas](./FUNCIONALIDADES.md)
- [Guía Completa de Desarrollo](./GUIA_COMPLETA.md)
- [Configuración de Pagos](./CONFIGURACION_PAGOS.md)
- [Resumen del Proyecto](./RESUMEN_FINAL.md)

## Soporte Técnico

Para asistencia técnica o reporte de problemas:

1. Revisa la documentación existente
2. Busca en issues cerrados del repositorio
3. Abre un nuevo issue con detalles completos
4. Incluye logs relevantes y pasos para reproducir

## Licencia

Este proyecto es propiedad privada. Todos los derechos reservados.

Copyright © 2025 Victoria Montoya Boutique

---

**Última actualización:** Octubre 2025
**Versión del documento:** 1.0
