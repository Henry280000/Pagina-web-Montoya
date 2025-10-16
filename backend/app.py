from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import uuid
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Base de datos simulada de órdenes
orders_db = []

@app.route('/', methods=['GET'])
def index():
    """Página de inicio del API"""
    return jsonify({
        'message': '🛍️ Bienvenido a Victoria Montoya Boutique API',
        'version': '1.0.0',
        'status': 'active',
        'frontend_url': 'http://localhost:3000',
        'endpoints': {
            'products': {
                'GET /api/products': 'Obtener todos los productos',
                'GET /api/products/<id>': 'Obtener producto específico',
                'GET /api/products/category/<category>': 'Obtener productos por categoría'
            },
            'orders': {
                'POST /api/orders': 'Crear nueva orden',
                'GET /api/orders': 'Obtener todas las órdenes',
                'GET /api/orders/<id>': 'Obtener orden específica'
            },
            'payment': {
                'POST /api/payment/process': 'Procesar pago con tarjeta',
                'POST /api/payment/paypal/create': 'Crear pago PayPal',
                'POST /api/payment/paypal/execute': 'Ejecutar pago PayPal'
            },
            'health': {
                'GET /api/health': 'Estado del servidor'
            }
        },
        'documentation': 'https://github.com/victoria-montoya-boutique'
    })

# Base de datos simulada de productos
products = [
    {
        'id': '1',
        'name': 'Vestido Elegante Negro',
        'price': 2499,
        'description': 'Vestido de noche elegante con detalles dorados',
        'image': 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500',
        'category': 'Vestidos',
        'stock': 10
    },
    {
        'id': '2',
        'name': 'Blusa de Seda Premium',
        'price': 1899,
        'description': 'Blusa de seda italiana con acabados delicados',
        'image': 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500',
        'category': 'Blusas',
        'stock': 15
    },
    {
        'id': '3',
        'name': 'Abrigo de Lana Luxury',
        'price': 3999,
        'description': 'Abrigo de lana merino con forro de seda',
        'image': 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500',
        'category': 'Abrigos',
        'stock': 8
    },
    {
        'id': '4',
        'name': 'Pantalón Palazzo Dorado',
        'price': 1599,
        'description': 'Pantalón palazzo con detalles metálicos',
        'image': 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500',
        'category': 'Pantalones',
        'stock': 12
    },
    {
        'id': '5',
        'name': 'Chaqueta de Cuero Premium',
        'price': 4299,
        'description': 'Chaqueta de cuero genuino con acabados artesanales',
        'image': 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
        'category': 'Chaquetas',
        'stock': 6
    },
    {
        'id': '6',
        'name': 'Falda Plisada Elegante',
        'price': 1299,
        'description': 'Falda plisada midi con cintura alta',
        'image': 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500',
        'category': 'Faldas',
        'stock': 20
    }
]

@app.route('/api/products', methods=['GET'])
def get_products():
    """Obtener todos los productos"""
    return jsonify(products)

@app.route('/api/products/<product_id>', methods=['GET'])
def get_product(product_id):
    """Obtener un producto específico por ID"""
    product = next((p for p in products if p['id'] == product_id), None)
    if product:
        return jsonify(product)
    return jsonify({'error': 'Producto no encontrado'}), 404

@app.route('/api/products/category/<category>', methods=['GET'])
def get_products_by_category(category):
    """Obtener productos por categoría"""
    filtered_products = [p for p in products if p['category'].lower() == category.lower()]
    return jsonify(filtered_products)

@app.route('/api/orders', methods=['POST'])
def create_order():
    """Crear una nueva orden"""
    order_data = request.json
    
    # Generar ID único para la orden
    order_id = f"VM-{str(uuid.uuid4())[:8].upper()}"
    
    # Crear objeto de orden
    order = {
        'order_id': order_id,
        'customer': order_data.get('customer', {}),
        'items': order_data.get('items', []),
        'total': order_data.get('total', 0),
        'payment_method': order_data.get('payment_method', 'card'),
        'shipping_address': order_data.get('shipping_address', {}),
        'status': 'pending',
        'created_at': datetime.now().isoformat(),
    }
    
    # Guardar en la "base de datos"
    orders_db.append(order)
    
    return jsonify({
        'success': True,
        'message': 'Orden creada exitosamente',
        'order': order
    }), 201

@app.route('/api/orders/<order_id>', methods=['GET'])
def get_order(order_id):
    """Obtener una orden específica por ID"""
    order = next((o for o in orders_db if o['order_id'] == order_id), None)
    if order:
        return jsonify(order)
    return jsonify({'error': 'Orden no encontrada'}), 404

@app.route('/api/orders', methods=['GET'])
def get_all_orders():
    """Obtener todas las órdenes"""
    return jsonify(orders_db)

@app.route('/api/payment/process', methods=['POST'])
def process_payment():
    """Procesar pago con tarjeta (simulado)"""
    payment_data = request.json
    
    # Validar datos de pago
    required_fields = ['card_number', 'card_name', 'expiry_date', 'cvv', 'amount']
    if not all(field in payment_data for field in required_fields):
        return jsonify({
            'success': False,
            'error': 'Datos de pago incompletos'
        }), 400
    
    # Simular procesamiento (en producción, aquí iría Stripe/PayPal)
    transaction_id = f"TXN-{str(uuid.uuid4())[:12].upper()}"
    
    return jsonify({
        'success': True,
        'message': 'Pago procesado exitosamente',
        'transaction_id': transaction_id,
        'amount': payment_data['amount'],
        'timestamp': datetime.now().isoformat()
    }), 200

@app.route('/api/payment/paypal/create', methods=['POST'])
def create_paypal_payment():
    """Crear orden de pago con PayPal"""
    payment_data = request.json
    
    order_id = f"PP-{str(uuid.uuid4())[:12].upper()}"
    
    return jsonify({
        'success': True,
        'order_id': order_id,
        'approval_url': 'https://www.paypal.com/checkoutnow?token=' + order_id
    }), 200

@app.route('/api/payment/paypal/execute', methods=['POST'])
def execute_paypal_payment():
    """Ejecutar pago de PayPal"""
    payment_data = request.json
    
    return jsonify({
        'success': True,
        'message': 'Pago con PayPal completado',
        'transaction_id': payment_data.get('paymentID'),
        'payer_id': payment_data.get('payerID')
    }), 200

@app.route('/api/health', methods=['GET'])
def health_check():
    """Verificar el estado del servidor"""
    return jsonify({
        'status': 'ok', 
        'message': 'Backend Victoria Montoya funcionando correctamente',
        'total_products': len(products),
        'total_orders': len(orders_db)
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)
