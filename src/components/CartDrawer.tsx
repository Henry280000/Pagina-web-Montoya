import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  Divider,
  Button,
  Card,
  CardMedia,
  CardContent,
  Badge,
  Chip,
} from '@mui/material';
import {
  Close,
  Add,
  Remove,
  Delete,
  ShoppingCart,
  CreditCard,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { removeFromCart, updateQuantity } from '../store/cartSlice';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ open, onClose, onCheckout }) => {
  const dispatch = useAppDispatch();
  const { items, total } = useAppSelector((state) => state.cart);

  const handleUpdateQuantity = (id: string, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckoutClick = () => {
    onCheckout();
    onClose();
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: 450 },
          backgroundColor: '#fafafa',
        },
      }}
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box
          sx={{
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'primary.main',
            color: 'white',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ShoppingCart />
            <Typography variant="h6" fontWeight={600}>
              Tu Carrito
            </Typography>
            <Badge badgeContent={items.length} color="secondary" />
          </Box>
          <IconButton onClick={onClose} sx={{ color: 'white' }}>
            <Close />
          </IconButton>
        </Box>

        {/* Cart Items */}
        <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
          {items.length === 0 ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                gap: 2,
              }}
            >
              <ShoppingCart sx={{ fontSize: 80, color: 'text.secondary', opacity: 0.3 }} />
              <Typography variant="h6" color="text.secondary">
                Tu carrito está vacío
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign="center">
                Agrega algunos productos para comenzar tu compra
              </Typography>
              <Button variant="contained" onClick={onClose}>
                Continuar Comprando
              </Button>
            </Box>
          ) : (
            <AnimatePresence>
              <List>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card sx={{ mb: 2, position: 'relative' }}>
                      <Box sx={{ display: 'flex', p: 2 }}>
                        <CardMedia
                          component="img"
                          sx={{ width: 100, height: 120, objectFit: 'cover', borderRadius: 1 }}
                          image={item.image}
                          alt={item.name}
                        />
                        <CardContent sx={{ flex: 1, p: 1, '&:last-child': { pb: 1 } }}>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'start',
                            }}
                          >
                            <Box>
                              <Typography variant="subtitle1" fontWeight={600}>
                                {item.name}
                              </Typography>
                              <Chip
                                label={item.category}
                                size="small"
                                sx={{ mt: 0.5, mb: 1 }}
                              />
                            </Box>
                            <IconButton
                              size="small"
                              onClick={() => handleRemoveItem(item.id)}
                              sx={{ color: 'error.main' }}
                            >
                              <Delete fontSize="small" />
                            </IconButton>
                          </Box>

                          <Typography
                            variant="h6"
                            color="primary"
                            fontWeight={700}
                            sx={{ mb: 1 }}
                          >
                            ${item.price.toLocaleString('es-MX')} MXN
                          </Typography>

                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: 1,
                              }}
                            >
                              <IconButton
                                size="small"
                                onClick={() => handleUpdateQuantity(item.id, item.quantity, -1)}
                              >
                                <Remove fontSize="small" />
                              </IconButton>
                              <Typography sx={{ px: 2, fontWeight: 600 }}>
                                {item.quantity}
                              </Typography>
                              <IconButton
                                size="small"
                                onClick={() => handleUpdateQuantity(item.id, item.quantity, 1)}
                              >
                                <Add fontSize="small" />
                              </IconButton>
                            </Box>

                            <Typography variant="body2" fontWeight={600}>
                              Subtotal: ${(item.price * item.quantity).toLocaleString('es-MX')}
                            </Typography>
                          </Box>
                        </CardContent>
                      </Box>
                    </Card>
                  </motion.div>
                ))}
              </List>
            </AnimatePresence>
          )}
        </Box>

        {/* Footer with Total and Checkout */}
        {items.length > 0 && (
          <Box
            sx={{
              p: 2,
              backgroundColor: 'white',
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 1,
                }}
              >
                <Typography variant="body1">Subtotal:</Typography>
                <Typography variant="body1">${total.toLocaleString('es-MX')} MXN</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 1,
                }}
              >
                <Typography variant="body1">Envío:</Typography>
                <Typography variant="body1" color="success.main">
                  {total > 1500 ? 'GRATIS' : '$150 MXN'}
                </Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6" fontWeight={700}>
                  Total:
                </Typography>
                <Typography variant="h5" fontWeight={700} color="primary">
                  ${(total + (total > 1500 ? 0 : 150)).toLocaleString('es-MX')} MXN
                </Typography>
              </Box>
            </Box>

            <Button
              fullWidth
              variant="contained"
              size="large"
              startIcon={<CreditCard />}
              onClick={handleCheckoutClick}
              sx={{
                py: 1.5,
                backgroundColor: 'secondary.main',
                color: 'black',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'secondary.dark',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Proceder al Pago
            </Button>

            {total < 1500 && (
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block', mt: 1, textAlign: 'center' }}
              >
                Agrega ${(1500 - total).toLocaleString('es-MX')} más para envío gratis
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
