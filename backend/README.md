# Victoria Montoya Boutique - Backend

## Configuración del Entorno Virtual Python

### 1. Crear entorno virtual
```bash
cd backend
python3 -m venv venv
```

### 2. Activar el entorno virtual

**macOS/Linux:**
```bash
source venv/bin/activate
```

**Windows:**
```bash
venv\Scripts\activate
```

### 3. Instalar dependencias
```bash
pip install -r requirements.txt
```

### 4. Ejecutar el servidor
```bash
python app.py
```

El servidor estará disponible en: `http://localhost:5000`

## Endpoints Disponibles

- `GET /api/products` - Obtener todos los productos
- `GET /api/products/<id>` - Obtener un producto específico
- `GET /api/products/category/<category>` - Obtener productos por categoría
- `POST /api/orders` - Crear una nueva orden
- `GET /api/health` - Verificar estado del servidor

## Desactivar entorno virtual
```bash
deactivate
```
