import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Box } from '@mui/material';
import { ShoppingCart, FilterList } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useAppSelector } from '../store/hooks';
import CartDrawer from './CartDrawer';
import FilterDrawer from './FilterDrawer';
import CheckoutModal from './CheckoutModal';

const Navbar: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const filters = useAppSelector((state) => state.filters);
  
  const [cartOpen, setCartOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const activeFiltersCount =
    filters.category.length +
    filters.sizes.length +
    filters.colors.length +
    (filters.priceRange.min !== 0 || filters.priceRange.max !== 10000 ? 1 : 0);

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: 'rgba(44, 44, 44, 0.95)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="filters"
            sx={{ mr: 2 }}
            onClick={() => setFiltersOpen(true)}
          >
            <Badge badgeContent={activeFiltersCount} color="secondary">
              <FilterList />
            </Badge>
          </IconButton>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '0.15em',
                background: 'linear-gradient(45deg, #ffffff 30%, #d4af37 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              }}
            >
              VICTORIA MONTOYA
            </Typography>
          </motion.div>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton 
              color="inherit"
              onClick={() => setCartOpen(true)}
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <CartDrawer 
        open={cartOpen} 
        onClose={() => setCartOpen(false)}
        onCheckout={() => setCheckoutOpen(true)}
      />
      
      <FilterDrawer 
        open={filtersOpen} 
        onClose={() => setFiltersOpen(false)}
      />

      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />
    </>
  );
};

export default Navbar;
