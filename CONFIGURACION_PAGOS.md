# 💳 Configuración de Sistemas de Pago

## 🔐 Configuración de PayPal

### 1. Obtener credenciales de PayPal

1. Ve a [PayPal Developer](https://developer.paypal.com/)
2. Inicia sesión con tu cuenta PayPal
3. Ve a "Dashboard" > "My Apps & Credentials"
4. Crea una nueva app o selecciona una existente
5. Copia el **Client ID**

### 2. Configurar en el proyecto

Edita el archivo `src/components/CheckoutModal.tsx` y reemplaza:

```typescript
clientId: 'YOUR_PAYPAL_CLIENT_ID'
```

Con tu Client ID real:

```typescript
clientId: 'AbCdEfGhIjKlMnOpQrStUvWxYz123456'
```

### 3. Modo Sandbox vs Producción

**Sandbox (Pruebas):**
- Usa las credenciales de Sandbox
- No se procesa dinero real
- Perfecto para desarrollo

**Producción:**
- Usa las credenciales de Live
- Procesa pagos reales
- Requiere verificación de cuenta

### 4. Cuentas de prueba

PayPal Sandbox proporciona cuentas de prueba:
- **Comprador:** buyer@example.com / password123
- **Vendedor:** seller@example.com / password123

---

## 💳 Configuración de Stripe (Tarjetas de Crédito/Débito)

### 1. Obtener API Keys de Stripe

1. Ve a [Stripe Dashboard](https://dashboard.stripe.com/)
2. Crea una cuenta o inicia sesión
3. Ve a "Developers" > "API keys"
4. Copia la **Publishable key** y **Secret key**

### 2. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```bash
# Frontend
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_51ABCDEFghijklmnop

# Backend (opcional)
STRIPE_SECRET_KEY=sk_test_51ABCDEFghijklmnop
```

### 3. Instalar dependencias adicionales para Stripe

Si quieres implementación completa de Stripe:

```bash
npm install @stripe/stripe-js @stripe/react-stripe-js
pip install stripe  # Para backend Python
```

### 4. Tarjetas de prueba de Stripe

**Tarjetas exitosas:**
- `4242 4242 4242 4242` - Visa (exitosa)
- `5555 5555 5555 4444` - Mastercard (exitosa)
- `3782 822463 10005` - American Express (exitosa)

**Tarjetas con errores (para probar):**
- `4000 0000 0000 0002` - Rechazada
- `4000 0000 0000 9995` - Fondos insuficientes

**Datos adicionales:**
- Fecha: Cualquier fecha futura (ej: 12/25)
- CVV: Cualquier 3 dígitos (ej: 123)
- Código postal: Cualquiera (ej: 12345)

---

## 🔧 Implementación en el Backend (Python Flask)

### 1. Instalar Stripe en el backend

```bash
cd backend
source venv/bin/activate
pip install stripe
```

### 2. Actualizar requirements.txt

```bash
pip freeze > requirements.txt
```

### 3. Ejemplo de endpoint con Stripe

Agrega esto a `backend/app.py`:

```python
import stripe

# Configurar Stripe
stripe.api_key = 'tu_stripe_secret_key'

@app.route('/api/payment/stripe/intent', methods=['POST'])
def create_payment_intent():
    try:
        data = request.json
        amount = int(data['amount'] * 100)  # Stripe usa centavos
        
        intent = stripe.PaymentIntent.create(
            amount=amount,
            currency='mxn',
            payment_method_types=['card'],
        )
        
        return jsonify({
            'clientSecret': intent.client_secret
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 400
```

---

## 🌐 Configuración de Webhook (Opcional)

### PayPal Webhooks

1. Ve a PayPal Dashboard > Webhooks
2. Crea un nuevo webhook
3. URL: `https://tudominio.com/api/webhooks/paypal`
4. Selecciona eventos: Payment completed, Payment failed, etc.

### Stripe Webhooks

1. Ve a Stripe Dashboard > Developers > Webhooks
2. Agrega endpoint
3. URL: `https://tudominio.com/api/webhooks/stripe`
4. Selecciona eventos: payment_intent.succeeded, etc.

---

## 🔒 Seguridad

### Mejores prácticas:

1. **Nunca expongas las Secret Keys en el frontend**
   - Solo usa Publishable Keys en React
   - Secret Keys solo en el backend

2. **Usa HTTPS en producción**
   - PayPal y Stripe requieren HTTPS
   - Obtén certificado SSL (Let's Encrypt es gratis)

3. **Valida datos en el servidor**
   - No confíes en validaciones del frontend
   - Verifica montos en el backend

4. **Maneja errores apropiadamente**
   - Muestra mensajes claros al usuario
   - Registra errores para debugging

5. **PCI Compliance**
   - Nunca almacenes números de tarjeta completos
   - Usa tokens de Stripe/PayPal
   - No registres CVV en logs

---

## 📝 Ejemplo de Flujo Completo

### Frontend (CheckoutModal.tsx):

```typescript
// 1. Usuario ingresa datos de pago
const handleCardPayment = async () => {
  setProcessing(true);
  
  try {
    // 2. Enviar al backend para procesar
    const response = await fetch('http://localhost:5000/api/payment/process', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        card_number: cardInfo.cardNumber,
        amount: total,
        order_id: orderId
      })
    });
    
    const result = await response.json();
    
    if (result.success) {
      // 3. Mostrar confirmación
      setOrderComplete(true);
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setProcessing(false);
  }
};
```

### Backend (app.py):

```python
@app.route('/api/payment/process', methods=['POST'])
def process_payment():
    data = request.json
    
    # 1. Validar datos
    if not validate_payment_data(data):
        return jsonify({'success': False, 'error': 'Invalid data'}), 400
    
    # 2. Procesar con Stripe/PayPal
    try:
        charge = stripe.Charge.create(
            amount=int(data['amount'] * 100),
            currency='mxn',
            source=data['token'],
            description=f"Orden {data['order_id']}"
        )
        
        # 3. Guardar orden en DB
        save_order(data, charge.id)
        
        return jsonify({
            'success': True,
            'transaction_id': charge.id
        })
    except stripe.error.CardError as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 400
```

---

## 🚀 Pasar a Producción

### Checklist:

- [ ] Cambiar de API keys de Sandbox a Producción
- [ ] Configurar HTTPS
- [ ] Configurar webhooks
- [ ] Probar con tarjetas reales pequeños montos
- [ ] Configurar sistema de notificaciones por email
- [ ] Implementar logging de transacciones
- [ ] Configurar backup de base de datos
- [ ] Revisar términos y condiciones de PayPal/Stripe
- [ ] Configurar manejo de reembolsos
- [ ] Implementar detección de fraude

---

## 📞 Soporte

### PayPal
- [Documentación](https://developer.paypal.com/docs/)
- [Soporte](https://www.paypal.com/us/smarthelp/contact-us)

### Stripe
- [Documentación](https://stripe.com/docs)
- [Soporte](https://support.stripe.com/)

---

## ⚠️ Importante

Este proyecto incluye una **simulación de pagos** para desarrollo. Para producción:

1. Implementa Stripe o PayPal correctamente
2. Usa backend seguro (no solo simulación)
3. Cumple con regulaciones PCI DSS
4. Contrata SSL para tu dominio
5. Implementa medidas anti-fraude

**No uses el código de simulación en producción sin implementar pagos reales.**
