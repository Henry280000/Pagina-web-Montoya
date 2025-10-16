import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import { AddShoppingCart } from '@mui/icons-material';
import { useAppDispatch } from '../store/hooks';
import { addToCart } from '../store/cartSlice';
import { Product } from '../types';

const FeaturedProducts: React.FC = () => {
  const dispatch = useAppDispatch();

  // Productos de ejemplo
  const products: Product[] = [
    {
      id: '1',
      name: 'Vestido Elegante Negro',
      price: 2499,
      description: 'Vestido de noche elegante con detalles dorados',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500',
      category: 'Vestidos',
      stock: 10,
    },
    {
      id: '2',
      name: 'Blusa de Seda Premium',
      price: 1899,
      description: 'Blusa de seda italiana con acabados delicados',
      image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500',
      category: 'Blusas',
      stock: 15,
    },
    {
      id: '3',
      name: 'Abrigo de Lana Luxury',
      price: 3999,
      description: 'Abrigo de lana merino con forro de seda',
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500',
      category: 'Abrigos',
      stock: 8,
    },
    {
      id: '4',
      name: 'Pantalón Palazzo Dorado',
      price: 1599,
      description: 'Pantalón palazzo con detalles metálicos',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500',
      category: 'Pantalones',
      stock: 12,
    },
  ];

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: '#fafafa',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              fontWeight: 700,
              color: 'primary.main',
            }}
          >
            Colección Destacada
          </Typography>
          
          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 6,
              color: 'text.secondary',
              fontWeight: 300,
            }}
          >
            Piezas únicas seleccionadas especialmente para ti
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="350"
                      image={product.image}
                      alt={product.name}
                      sx={{
                        transition: 'transform 0.5s ease',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                      }}
                    />
                    <Chip
                      label="NUEVO"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        backgroundColor: 'secondary.main',
                        color: 'black',
                        fontWeight: 600,
                      }}
                    />
                  </Box>

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'secondary.main',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                      }}
                    >
                      {product.category}
                    </Typography>
                    
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        mt: 1,
                        mb: 1,
                        fontWeight: 600,
                        color: 'primary.main',
                      }}
                    >
                      {product.name}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {product.description}
                    </Typography>
                    
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                      }}
                    >
                      ${product.price.toLocaleString('es-MX')} MXN
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<AddShoppingCart />}
                      onClick={() => handleAddToCart(product)}
                      sx={{
                        backgroundColor: 'primary.main',
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Agregar al Carrito
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedProducts;
