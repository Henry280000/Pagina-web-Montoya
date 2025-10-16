import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  Button,
  Menu,
  MenuItem,
  useScrollTrigger,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  ShoppingCart,
  FilterList,
  Menu as MenuIcon,
  KeyboardArrowDown,
  Info,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { setCategory } from '../store/filtersSlice';
import CartDrawer from './CartDrawer';
import FilterDrawer from './FilterDrawer';
import CheckoutModal from './CheckoutModal';

interface NavbarProps {
  onAboutUsClick: () => void;
  onHomeClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAboutUsClick, onHomeClick }) => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const filters = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();
  
  const [cartOpen, setCartOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [categoryAnchor, setCategoryAnchor] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const activeFiltersCount =
    filters.category.length +
    filters.sizes.length +
    filters.colors.length +
    (filters.priceRange.min !== 0 || filters.priceRange.max !== 10000 ? 1 : 0);

  const categories = [
    { label: 'Todos', value: '' },
    { label: 'Mujer', value: 'mujer' },
    { label: 'Hombre', value: 'hombre' },
    { label: 'Niños', value: 'niños' },
    { label: 'Accesorios', value: 'accesorios' },
  ];

  const handleCategoryClick = (event: React.MouseEvent<HTMLElement>) => {
    setCategoryAnchor(event.currentTarget);
  };

  const handleCategoryClose = () => {
    setCategoryAnchor(null);
  };

  const handleCategorySelect = (category: string) => {
    if (category === '') {
      dispatch(setCategory([]));
    } else {
      dispatch(setCategory([category]));
    }
    handleCategoryClose();
    onHomeClick();
  };

  const handleAboutUs = () => {
    onAboutUsClick();
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    onHomeClick();
    dispatch(setCategory([]));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={trigger ? 4 : 0}
        sx={{ 
          backgroundColor: trigger ? 'rgba(26, 26, 26, 0.98)' : 'rgba(26, 26, 26, 0.95)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Menú móvil y filtros */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: 'flex', md: 'none' } }}
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            
            <IconButton
              size="large"
              color="inherit"
              aria-label="filters"
              onClick={() => setFiltersOpen(true)}
            >
              <Badge badgeContent={activeFiltersCount} color="secondary">
                <FilterList />
              </Badge>
            </IconButton>
          </Box>
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ cursor: 'pointer' }}
            onClick={handleLogoClick}
          >
            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '0.15em',
                background: 'linear-gradient(45deg, #ffffff 30%, #c9a961 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '1.2rem', sm: '1.8rem', md: '2.2rem' },
              }}
            >
              VICTORIA MONTOYA
            </Typography>
          </motion.div>

          {/* Navegación desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            <Button
              color="inherit"
              onClick={handleCategoryClick}
              endIcon={<KeyboardArrowDown />}
              sx={{
                fontSize: '0.95rem',
                fontWeight: 500,
                '&:hover': {
                  color: 'secondary.main',
                },
              }}
            >
              Categorías
            </Button>

            <Button
              color="inherit"
              startIcon={<Info />}
              onClick={handleAboutUs}
              sx={{
                fontSize: '0.95rem',
                fontWeight: 500,
                '&:hover': {
                  color: 'secondary.main',
                },
              }}
            >
              Nosotros
            </Button>

            <IconButton 
              color="inherit"
              onClick={() => setCartOpen(true)}
              sx={{
                ml: 1,
                '&:hover': {
                  color: 'secondary.main',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>

          {/* Carrito móvil */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton 
              color="inherit"
              onClick={() => setCartOpen(true)}
              sx={{
                '&:hover': {
                  color: 'secondary.main',
                },
              }}
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Menú de categorías */}
      <Menu
        anchorEl={categoryAnchor}
        open={Boolean(categoryAnchor)}
        onClose={handleCategoryClose}
        sx={{
          '& .MuiPaper-root': {
            bgcolor: 'primary.main',
            color: 'white',
            minWidth: '200px',
          },
        }}
      >
        {categories.map((cat) => (
          <MenuItem
            key={cat.value}
            onClick={() => handleCategorySelect(cat.value)}
            selected={
              cat.value === ''
                ? filters.category.length === 0
                : filters.category.includes(cat.value)
            }
            sx={{
              '&:hover': {
                bgcolor: 'secondary.main',
                color: 'primary.main',
              },
              '&.Mui-selected': {
                bgcolor: 'secondary.main',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'secondary.main',
                },
              },
            }}
          >
            {cat.label}
          </MenuItem>
        ))}
      </Menu>

      {/* Drawer móvil */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            bgcolor: 'primary.main',
            color: 'white',
            width: 250,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'secondary.main' }}>
            Menú
          </Typography>
        </Box>
        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleAboutUs}>
              <Info sx={{ mr: 2, color: 'secondary.main' }} />
              <ListItemText primary="Sobre Nosotros" />
            </ListItemButton>
          </ListItem>
          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', my: 1 }} />
          <ListItem>
            <ListItemText 
              primary="Categorías" 
              primaryTypographyProps={{ 
                variant: 'subtitle2', 
                color: 'secondary.main',
                fontWeight: 600 
              }} 
            />
          </ListItem>
          {categories.map((cat) => (
            <ListItem key={cat.value} disablePadding>
              <ListItemButton
                onClick={() => {
                  handleCategorySelect(cat.value);
                  setMobileMenuOpen(false);
                }}
                selected={
                  cat.value === ''
                    ? filters.category.length === 0
                    : filters.category.includes(cat.value)
                }
                sx={{
                  pl: 4,
                  '&.Mui-selected': {
                    bgcolor: 'secondary.main',
                    color: 'primary.main',
                  },
                }}
              >
                <ListItemText primary={cat.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

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
