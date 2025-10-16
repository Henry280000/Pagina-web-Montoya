import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
  Grid,
  Alert,
  CircularProgress,
  Divider,
  IconButton,
} from '@mui/material';
import {
  Close,
  CreditCard,
  AccountBalance,
  LocalShipping,
  CheckCircle,
} from '@mui/icons-material';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { motion } from 'framer-motion';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { clearCart } from '../store/cartSlice';

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ open, onClose }) => {
  const dispatch = useAppDispatch();
  const { items, total } = useAppSelector((state) => state.cart);
  const [activeStep, setActiveStep] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [orderComplete, setOrderComplete] = useState(false);
  const [processing, setProcessing] = useState(false);

  // Información de envío
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  // Información de tarjeta
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const steps = ['Información de Envío', 'Método de Pago', 'Confirmación'];

  const shippingCost = total > 1500 ? 0 : 150;
  const finalTotal = total + shippingCost;

  const handleNext = () => {
    if (activeStep === 0) {
      // Validar información de envío
      if (
        shippingInfo.fullName &&
        shippingInfo.email &&
        shippingInfo.address &&
        shippingInfo.city
      ) {
        setActiveStep((prevStep) => prevStep + 1);
      } else {
        alert('Por favor completa todos los campos requeridos');
      }
    } else if (activeStep === 1) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleCardPayment = async () => {
    setProcessing(true);
    
    // Simular procesamiento de pago
    setTimeout(() => {
      setProcessing(false);
      setOrderComplete(true);
      dispatch(clearCart());
    }, 2000);
  };

  const handlePayPalSuccess = (details: any) => {
    console.log('PayPal payment successful:', details);
    setOrderComplete(true);
    dispatch(clearCart());
  };

  const handleClose = () => {
    setActiveStep(0);
    setOrderComplete(false);
    setPaymentMethod('card');
    onClose();
  };

  const renderShippingForm = () => (
    <Box>
      <Typography variant="h6" gutterBottom fontWeight={600}>
        Información de Envío
      </Typography>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Nombre Completo *"
            value={shippingInfo.fullName}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, fullName: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email *"
            type="email"
            value={shippingInfo.email}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, email: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Teléfono *"
            value={shippingInfo.phone}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, phone: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Dirección *"
            value={shippingInfo.address}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, address: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Ciudad *"
            value={shippingInfo.city}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, city: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label="Estado"
            value={shippingInfo.state}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, state: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label="C.P."
            value={shippingInfo.zipCode}
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, zipCode: e.target.value })
            }
          />
        </Grid>
      </Grid>
    </Box>
  );

  const renderPaymentForm = () => (
    <Box>
      <Typography variant="h6" gutterBottom fontWeight={600}>
        Método de Pago
      </Typography>

      <FormControl component="fieldset" sx={{ mt: 2, width: '100%' }}>
        <FormLabel component="legend">Selecciona tu método de pago</FormLabel>
        <RadioGroup
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value as 'card' | 'paypal')}
        >
          <Card
            sx={{
              mt: 2,
              border: paymentMethod === 'card' ? '2px solid' : '1px solid',
              borderColor: paymentMethod === 'card' ? 'secondary.main' : 'divider',
              cursor: 'pointer',
            }}
            onClick={() => setPaymentMethod('card')}
          >
            <CardContent>
              <FormControlLabel
                value="card"
                control={<Radio />}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CreditCard />
                    <Typography fontWeight={600}>Tarjeta de Crédito/Débito</Typography>
                  </Box>
                }
              />
              <Typography variant="caption" color="text.secondary" sx={{ ml: 4 }}>
                Visa, Mastercard, American Express
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              mt: 2,
              border: paymentMethod === 'paypal' ? '2px solid' : '1px solid',
              borderColor: paymentMethod === 'paypal' ? 'secondary.main' : 'divider',
              cursor: 'pointer',
            }}
            onClick={() => setPaymentMethod('paypal')}
          >
            <CardContent>
              <FormControlLabel
                value="paypal"
                control={<Radio />}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AccountBalance />
                    <Typography fontWeight={600}>PayPal</Typography>
                  </Box>
                }
              />
              <Typography variant="caption" color="text.secondary" sx={{ ml: 4 }}>
                Paga de forma segura con tu cuenta PayPal
              </Typography>
            </CardContent>
          </Card>
        </RadioGroup>
      </FormControl>

      {paymentMethod === 'card' && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Información de la Tarjeta
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Número de Tarjeta"
                placeholder="1234 5678 9012 3456"
                value={cardInfo.cardNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\s/g, '');
                  if (value.length <= 16 && /^\d*$/.test(value)) {
                    const formatted = value.match(/.{1,4}/g)?.join(' ') || value;
                    setCardInfo({ ...cardInfo, cardNumber: formatted });
                  }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nombre en la Tarjeta"
                value={cardInfo.cardName}
                onChange={(e) =>
                  setCardInfo({ ...cardInfo, cardName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Fecha de Expiración"
                placeholder="MM/AA"
                value={cardInfo.expiryDate}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  if (value.length <= 4) {
                    const formatted =
                      value.length >= 2
                        ? `${value.slice(0, 2)}/${value.slice(2)}`
                        : value;
                    setCardInfo({ ...cardInfo, expiryDate: formatted });
                  }
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="CVV"
                placeholder="123"
                value={cardInfo.cvv}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  if (value.length <= 4) {
                    setCardInfo({ ...cardInfo, cvv: value });
                  }
                }}
              />
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );

  const renderConfirmation = () => (
    <Box>
      <Typography variant="h6" gutterBottom fontWeight={600}>
        Resumen de tu Pedido
      </Typography>

      <Card sx={{ mt: 2, mb: 2 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <LocalShipping color="primary" />
            <Typography variant="subtitle1" fontWeight={600}>
              Información de Envío
            </Typography>
          </Box>
          <Typography variant="body2">{shippingInfo.fullName}</Typography>
          <Typography variant="body2">{shippingInfo.email}</Typography>
          <Typography variant="body2">{shippingInfo.phone}</Typography>
          <Typography variant="body2">{shippingInfo.address}</Typography>
          <Typography variant="body2">
            {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Productos ({items.length})
          </Typography>
          {items.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                py: 1,
              }}
            >
              <Typography variant="body2">
                {item.name} x {item.quantity}
              </Typography>
              <Typography variant="body2" fontWeight={600}>
                ${(item.price * item.quantity).toLocaleString('es-MX')}
              </Typography>
            </Box>
          ))}
          <Divider sx={{ my: 1 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
            <Typography variant="body2">Subtotal:</Typography>
            <Typography variant="body2">${total.toLocaleString('es-MX')}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
            <Typography variant="body2">Envío:</Typography>
            <Typography variant="body2" color={shippingCost === 0 ? 'success.main' : 'inherit'}>
              {shippingCost === 0 ? 'GRATIS' : `$${shippingCost}`}
            </Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
            <Typography variant="h6" fontWeight={700}>
              Total:
            </Typography>
            <Typography variant="h6" fontWeight={700} color="primary">
              ${finalTotal.toLocaleString('es-MX')} MXN
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {paymentMethod === 'paypal' ? (
        <PayPalScriptProvider
          options={{
            clientId: 'YOUR_PAYPAL_CLIENT_ID', // Reemplazar con tu Client ID real
            currency: 'MXN',
          }}
        >
          <PayPalButtons
            style={{ layout: 'vertical' }}
            createOrder={(data, actions) => {
              return actions.order.create({
                intent: 'CAPTURE',
                purchase_units: [
                  {
                    amount: {
                      value: (finalTotal / 20).toFixed(2), // Conversión aproximada MXN a USD
                      currency_code: 'USD',
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order!.capture().then((details) => {
                handlePayPalSuccess(details);
              });
            }}
          />
        </PayPalScriptProvider>
      ) : (
        <Button
          fullWidth
          variant="contained"
          size="large"
          onClick={handleCardPayment}
          disabled={processing}
          sx={{
            py: 1.5,
            backgroundColor: 'secondary.main',
            color: 'black',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: 'secondary.dark',
            },
          }}
        >
          {processing ? (
            <CircularProgress size={24} sx={{ color: 'black' }} />
          ) : (
            'Confirmar Pago'
          )}
        </Button>
      )}
    </Box>
  );

  const renderOrderComplete = () => (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          textAlign: 'center',
          py: 4,
        }}
      >
        <CheckCircle
          sx={{
            fontSize: 100,
            color: 'success.main',
            mb: 2,
          }}
        />
        <Typography variant="h4" fontWeight={700} gutterBottom>
          ¡Pedido Confirmado!
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Gracias por tu compra. Recibirás un email de confirmación pronto.
        </Typography>
        <Alert severity="success" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>Número de Orden:</strong> VM-{Math.floor(Math.random() * 10000)}
          </Typography>
          <Typography variant="body2">
            <strong>Total Pagado:</strong> ${finalTotal.toLocaleString('es-MX')} MXN
          </Typography>
        </Alert>
        <Button
          variant="contained"
          size="large"
          onClick={handleClose}
          sx={{
            backgroundColor: 'secondary.main',
            color: 'black',
            px: 4,
            '&:hover': {
              backgroundColor: 'secondary.dark',
            },
          }}
        >
          Continuar Comprando
        </Button>
      </Box>
    </motion.div>
  );

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          maxHeight: '90vh',
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'primary.main',
          color: 'white',
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          {orderComplete ? '¡Gracias por tu Compra!' : 'Finalizar Compra'}
        </Typography>
        <IconButton onClick={handleClose} sx={{ color: 'white' }}>
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ mt: 2 }}>
        {orderComplete ? (
          renderOrderComplete()
        ) : (
          <>
            <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {activeStep === 0 && renderShippingForm()}
            {activeStep === 1 && renderPaymentForm()}
            {activeStep === 2 && renderConfirmation()}

            {activeStep < 2 && (
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <Button
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  variant="outlined"
                >
                  Atrás
                </Button>
                <Button
                  onClick={handleNext}
                  variant="contained"
                  sx={{
                    backgroundColor: 'secondary.main',
                    color: 'black',
                    '&:hover': {
                      backgroundColor: 'secondary.dark',
                    },
                  }}
                >
                  Siguiente
                </Button>
              </Box>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
