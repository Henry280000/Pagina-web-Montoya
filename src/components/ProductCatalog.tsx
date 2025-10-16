import React, { useState, useMemo } from 'react';
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
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import { AddShoppingCart, Search } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addToCart } from '../store/cartSlice';
import { setSearchQuery, setSortBy } from '../store/filtersSlice';
import { Product } from '../types';

// Base de productos ampliada (fuera del componente para evitar re-renders)
const allProducts: Product[] = [
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
  {
    id: '5',
    name: 'Chaqueta de Cuero Premium',
    price: 4299,
    description: 'Chaqueta de cuero genuino con acabados artesanales',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
    category: 'Chaquetas',
    stock: 6,
  },
  {
    id: '6',
    name: 'Falda Plisada Elegante',
    price: 1299,
    description: 'Falda plisada midi con cintura alta',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500',
    category: 'Faldas',
    stock: 20,
  },
  {
    id: '7',
    name: 'Vestido Cóctel Rojo',
    price: 2899,
    description: 'Vestido de cóctel con escote en V',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500',
    category: 'Vestidos',
    stock: 7,
  },
  {
    id: '8',
    name: 'Blazer Estructurado',
    price: 2199,
    description: 'Blazer de corte italiano con detalles dorados',
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500',
    category: 'Chaquetas',
    stock: 14,
  },
  {
    id: '9',
    name: 'Pantalón de Vestir Slim',
    price: 1399,
    description: 'Pantalón de vestir con corte slim fit',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500',
    category: 'Pantalones',
    stock: 18,
  },
  {
    id: '10',
    name: 'Blusa Bordada Floral',
    price: 1699,
    description: 'Blusa con bordados florales hechos a mano',
    image: 'https://images.unsplash.com/photo-1564257577-617ccefddccd?w=500',
    category: 'Blusas',
    stock: 11,
  },
  {
    id: '11',
    name: 'Abrigo Largo Beige',
    price: 4599,
    description: 'Abrigo largo de cachemira con cinturón',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500',
    category: 'Abrigos',
    stock: 5,
  },
  {
    id: '12',
    name: 'Vestido Largo Estampado',
    price: 2699,
    description: 'Vestido largo con estampado floral exclusivo',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500',
    category: 'Vestidos',
    stock: 9,
  },
];

const ProductCatalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [addedProduct, setAddedProduct] = useState('');

  // Filtrar y ordenar productos
  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    // Filtrar por búsqueda
    if (filters.searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.searchQuery.toLowerCase())
      );
    }

    // Filtrar por categoría
    if (filters.category.length > 0) {
      filtered = filtered.filter((product) =>
        filters.category.includes(product.category)
      );
    }

    // Filtrar por precio
    filtered = filtered.filter(
      (product) =>
        product.price >= filters.priceRange.min &&
        product.price <= filters.priceRange.max
    );

    // Ordenar
    switch (filters.sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // newest - mantener orden original
        break;
    }

    return filtered;
  }, [filters]);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
    setAddedProduct(product.name);
    setSnackbarOpen(true);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const handleSortChange = (event: any) => {
    dispatch(setSortBy(event.target.value));
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
            Nuestra Colección
          </Typography>
          
          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 4,
              color: 'text.secondary',
              fontWeight: 300,
            }}
          >
            Descubre piezas únicas diseñadas especialmente para ti
          </Typography>
        </motion.div>

        {/* Barra de búsqueda y ordenamiento */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mb: 4,
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <TextField
            fullWidth
            placeholder="Buscar productos..."
            value={filters.searchQuery}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: 'white',
              borderRadius: 1,
            }}
          />
          
          <FormControl sx={{ minWidth: 200, backgroundColor: 'white', borderRadius: 1 }}>
            <InputLabel>Ordenar por</InputLabel>
            <Select
              value={filters.sortBy}
              onChange={handleSortChange}
              label="Ordenar por"
            >
              <MenuItem value="newest">Más recientes</MenuItem>
              <MenuItem value="price-asc">Precio: Menor a Mayor</MenuItem>
              <MenuItem value="price-desc">Precio: Mayor a Menor</MenuItem>
              <MenuItem value="name-asc">Nombre: A-Z</MenuItem>
              <MenuItem value="name-desc">Nombre: Z-A</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Contador de resultados */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Mostrando {filteredProducts.length} de {allProducts.length} productos
        </Typography>

        {/* Grid de productos */}
        {filteredProducts.length === 0 ? (
          <Box
            sx={{
              textAlign: 'center',
              py: 8,
            }}
          >
            <Typography variant="h5" color="text.secondary" gutterBottom>
              No se encontraron productos
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Intenta ajustar tus filtros de búsqueda
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={4}>
            {filteredProducts.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
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
                        label={product.stock < 10 ? 'ÚLTIMAS PIEZAS' : 'NUEVO'}
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          backgroundColor: product.stock < 10 ? 'error.main' : 'secondary.main',
                          color: product.stock < 10 ? 'white' : 'black',
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

                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: 'block', mt: 1 }}
                      >
                        {product.stock} disponibles
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
        )}
      </Container>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          {addedProduct} agregado al carrito
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ProductCatalog;
