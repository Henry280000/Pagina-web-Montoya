# Victoria Montoya Boutique - Backend API# Victoria Montoya Boutique - Backend



## Descripción## Configuración del Entorno Virtual Python



API RESTful desarrollada con Flask para gestionar el backend de Victoria Montoya Boutique. Proporciona endpoints para la gestión de productos, órdenes y procesamiento de pagos.### 1. Crear entorno virtual

```bash

## Requisitos del Sistemacd backend

python3 -m venv venv

- Python 3.9 o superior```

- pip 21.x o superior

- Entorno virtual (recomendado)### 2. Activar el entorno virtual



## Instalación**macOS/Linux:**

```bash

### 1. Configurar Entorno Virtualsource venv/bin/activate

```

#### macOS / Linux

**Windows:**

```bash```bash

cd backendvenv\Scripts\activate

python3 -m venv venv```

source venv/bin/activate

```### 3. Instalar dependencias

```bash

#### Windowspip install -r requirements.txt

```

```bash

cd backend### 4. Ejecutar el servidor

python -m venv venv```bash

venv\Scripts\activatepython app.py

``````



### 2. Instalar DependenciasEl servidor estará disponible en: `http://localhost:5000`



```bash## Endpoints Disponibles

pip install -r requirements.txt

```- `GET /api/products` - Obtener todos los productos

- `GET /api/products/<id>` - Obtener un producto específico

### 3. Iniciar el Servidor- `GET /api/products/category/<category>` - Obtener productos por categoría

- `POST /api/orders` - Crear una nueva orden

```bash- `GET /api/health` - Verificar estado del servidor

python app.py

```## Desactivar entorno virtual

```bash

El servidor estará disponible en: `http://localhost:5000`deactivate

```

## Dependencias

```
flask==3.0.0          # Framework web
flask-cors==4.0.0     # Manejo de CORS
python-dotenv==1.0.0  # Variables de entorno
```

## Endpoints de la API

### Productos

#### Obtener Todos los Productos

```http
GET /api/products
```

**Respuesta de Ejemplo:**

```json
[
  {
    "id": "1",
    "name": "Vestido Elegante Negro",
    "price": 2499,
    "description": "Vestido de noche elegante con detalles dorados",
    "image": "https://images.unsplash.com/...",
    "category": "Vestidos",
    "stock": 10
  }
]
```

#### Obtener Producto Específico

```http
GET /api/products/<product_id>
```

**Parámetros:**
- `product_id` (string): ID del producto

**Códigos de Respuesta:**
- `200 OK`: Producto encontrado
- `404 Not Found`: Producto no existe

#### Obtener Productos por Categoría

```http
GET /api/products/category/<category>
```

**Parámetros:**
- `category` (string): Nombre de la categoría (Vestidos, Blusas, Abrigos, Pantalones, Chaquetas, Faldas)

**Respuesta de Ejemplo:**

```json
[
  {
    "id": "1",
    "name": "Vestido Elegante Negro",
    "category": "Vestidos",
    ...
  }
]
```

### Órdenes

#### Crear Nueva Orden

```http
POST /api/orders
```

**Body de Solicitud:**

```json
{
  "customer": {
    "name": "Cliente Ejemplo",
    "email": "cliente@ejemplo.com",
    "phone": "+1234567890"
  },
  "items": [
    {
      "id": "1",
      "name": "Vestido Elegante Negro",
      "price": 2499,
      "quantity": 1
    }
  ],
  "total": 2499,
  "payment_method": "card",
  "shipping_address": {
    "street": "Calle Principal 123",
    "city": "Ciudad",
    "state": "Estado",
    "zip": "12345",
    "country": "País"
  }
}
```

**Respuesta de Ejemplo:**

```json
{
  "success": true,
  "message": "Orden creada exitosamente",
  "order": {
    "order_id": "VM-A1B2C3D4",
    "status": "pending",
    "created_at": "2025-10-15T12:00:00",
    ...
  }
}
```

**Códigos de Respuesta:**
- `201 Created`: Orden creada exitosamente
- `400 Bad Request`: Datos inválidos

#### Obtener Orden por ID

```http
GET /api/orders/<order_id>
```

**Parámetros:**
- `order_id` (string): ID de la orden

**Códigos de Respuesta:**
- `200 OK`: Orden encontrada
- `404 Not Found`: Orden no existe

#### Obtener Todas las Órdenes

```http
GET /api/orders
```

### Pagos

#### Procesar Pago con Tarjeta

```http
POST /api/payment/process
```

**Body de Solicitud:**

```json
{
  "card_number": "4242424242424242",
  "card_name": "Nombre del Titular",
  "expiry_date": "12/25",
  "cvv": "123",
  "amount": 2499
}
```

**Respuesta de Ejemplo:**

```json
{
  "success": true,
  "message": "Pago procesado exitosamente",
  "transaction_id": "TXN-123ABC456DEF",
  "amount": 2499,
  "timestamp": "2025-10-15T12:00:00"
}
```

**Códigos de Respuesta:**
- `200 OK`: Pago procesado
- `400 Bad Request`: Datos de pago incompletos

#### Crear Orden de PayPal

```http
POST /api/payment/paypal/create
```

**Body de Solicitud:**

```json
{
  "amount": 2499,
  "currency": "USD"
}
```

#### Ejecutar Pago de PayPal

```http
POST /api/payment/paypal/execute
```

**Body de Solicitud:**

```json
{
  "paymentID": "PAYID-123ABC",
  "payerID": "PAYER-456DEF"
}
```

### Estado del Servidor

#### Verificar Estado

```http
GET /api/health
```

**Respuesta de Ejemplo:**

```json
{
  "status": "ok",
  "message": "Backend Victoria Montoya funcionando correctamente",
  "total_products": 12,
  "total_orders": 5
}
```

#### Información de la API

```http
GET /
```

Retorna información general sobre los endpoints disponibles y la versión de la API.

## Configuración

### Variables de Entorno

Crea un archivo `.env` en el directorio `backend/` para configuraciones sensibles:

```bash
FLASK_ENV=development
FLASK_DEBUG=True
SECRET_KEY=tu-clave-secreta-aqui
STRIPE_SECRET_KEY=sk_test_...
PAYPAL_CLIENT_ID=...
PAYPAL_CLIENT_SECRET=...
```

### Modo de Producción

Para ejecutar en producción, utiliza un servidor WSGI como Gunicorn:

```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

## Estructura de Datos

### Modelo de Producto

```python
{
    'id': str,           # Identificador único
    'name': str,         # Nombre del producto
    'price': int,        # Precio en centavos
    'description': str,  # Descripción del producto
    'image': str,        # URL de la imagen
    'category': str,     # Categoría del producto
    'stock': int         # Cantidad disponible
}
```

### Modelo de Orden

```python
{
    'order_id': str,           # ID único de la orden
    'customer': dict,          # Información del cliente
    'items': list[dict],       # Lista de productos
    'total': int,              # Total en centavos
    'payment_method': str,     # Método de pago
    'shipping_address': dict,  # Dirección de envío
    'status': str,             # Estado de la orden
    'created_at': str          # Timestamp ISO 8601
}
```

## Manejo de Errores

La API retorna errores en el siguiente formato:

```json
{
  "error": "Descripción del error",
  "code": "ERROR_CODE"
}
```

### Códigos de Error Comunes

- `400 Bad Request`: Datos de solicitud inválidos
- `404 Not Found`: Recurso no encontrado
- `500 Internal Server Error`: Error del servidor

## Seguridad

### CORS

El servidor está configurado con Flask-CORS para permitir solicitudes desde el frontend en `http://localhost:3000`.

Para producción, configura los orígenes permitidos en `app.py`:

```python
CORS(app, origins=["https://tu-dominio.com"])
```

### Validación de Datos

Todos los endpoints validan los datos de entrada antes de procesarlos.

## Desactivar Entorno Virtual

```bash
deactivate
```

## Solución de Problemas

### Puerto en Uso

Si el puerto 5000 está ocupado, cambia el puerto en `app.py`:

```python
app.run(debug=True, port=5001)
```

### Dependencias No Instaladas

Asegúrate de haber activado el entorno virtual antes de instalar dependencias:

```bash
source venv/bin/activate  # macOS/Linux
pip install -r requirements.txt
```

## Soporte

Para reportar problemas o solicitar nuevas funcionalidades, abre un issue en el repositorio de GitHub.

## Licencia

Este proyecto es propiedad privada. Todos los derechos reservados.
