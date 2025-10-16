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

// Base de productos ampliada con nuevas categorías
const allProducts: Product[] = [
  // MUJER
  {
    id: '1',
    name: 'Vestido Elegante Negro',
    price: 2499,
    description: 'Vestido de noche elegante con detalles dorados',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop',
    category: 'mujer',
    stock: 10,
  },
  {
    id: '2',
    name: 'Blusa de Seda Premium',
    price: 1899,
    description: 'Blusa de seda italiana con acabados delicados',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500&h=600&fit=crop',
    category: 'mujer',
    stock: 15,
  },
  {
    id: '3',
    name: 'Abrigo de Lana Luxury',
    price: 3999,
    description: 'Abrigo de lana merino con forro de seda',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&h=600&fit=crop',
    category: 'mujer',
    stock: 8,
  },
  {
    id: '4',
    name: 'Pantalón Palazzo Dorado',
    price: 1599,
    description: 'Pantalón palazzo con detalles metálicos',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
    category: 'mujer',
    stock: 12,
  },
  {
    id: '5',
    name: 'Vestido Cóctel Rojo',
    price: 2899,
    description: 'Vestido de cóctel con escote en V',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&h=600&fit=crop',
    category: 'mujer',
    stock: 7,
  },
  {
    id: '6',
    name: 'Falda Plisada Elegante',
    price: 1299,
    description: 'Falda plisada midi con cintura alta',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&h=600&fit=crop',
    category: 'mujer',
    stock: 20,
  },
  
  // HOMBRE
  {
    id: '7',
    name: 'Traje Ejecutivo Negro',
    price: 5499,
    description: 'Traje de corte italiano en lana premium',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&h=600&fit=crop',
    category: 'hombre',
    stock: 8,
  },
  {
    id: '8',
    name: 'Camisa Oxford Blanca',
    price: 1299,
    description: 'Camisa de algodón egipcio con corte slim',
    image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500&h=600&fit=crop',
    category: 'hombre',
    stock: 25,
  },
  {
    id: '9',
    name: 'Chaqueta de Cuero Premium',
    price: 4299,
    description: 'Chaqueta de cuero genuino con acabados artesanales',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop',
    category: 'hombre',
    stock: 6,
  },
  {
    id: '10',
    name: 'Pantalón Chino Beige',
    price: 1599,
    description: 'Pantalón chino de algodón con ajuste perfecto',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=600&fit=crop',
    category: 'hombre',
    stock: 18,
  },
  {
    id: '11',
    name: 'Blazer Estructurado Azul',
    price: 2199,
    description: 'Blazer de corte italiano con detalles elegantes',
    image: 'https://images.unsplash.com/photo-1593030668990-c57c41f7b152?w=500&h=600&fit=crop',
    category: 'hombre',
    stock: 14,
  },
  {
    id: '12',
    name: 'Suéter de Cachemira',
    price: 2899,
    description: 'Suéter de cachemira 100% con cuello en V',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop',
    category: 'hombre',
    stock: 10,
  },
  
  // NIÑOS
  {
    id: '13',
    name: 'Conjunto Casual Niña',
    price: 899,
    description: 'Conjunto de blusa y falda con estampado floral',
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500&h=600&fit=crop',
    category: 'niños',
    stock: 15,
  },
  {
    id: '14',
    name: 'Camisa Formal Niño',
    price: 799,
    description: 'Camisa de vestir con pantalón incluido',
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=500&h=600&fit=crop',
    category: 'niños',
    stock: 20,
  },
  {
    id: '15',
    name: 'Vestido de Fiesta Niña',
    price: 1499,
    description: 'Vestido elegante con detalles en encaje',
    image: 'https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?w=500&h=600&fit=crop',
    category: 'niños',
    stock: 12,
  },
  {
    id: '16',
    name: 'Chaqueta Acolchada Niño',
    price: 1299,
    description: 'Chaqueta térmica con capucha desmontable',
    image: 'https://images.unsplash.com/photo-1519238326581-b5d7e4e26b06?w=500&h=600&fit=crop',
    category: 'niños',
    stock: 18,
  },
  
  // ACCESORIOS
  {
    id: '17',
    name: 'Bolso de Cuero Italiano',
    price: 3499,
    description: 'Bolso artesanal de cuero genuino con herrajes dorados',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=600&fit=crop',
    category: 'accesorios',
    stock: 8,
  },
  {
    id: '18',
    name: 'Reloj de Diseñador',
    price: 4999,
    description: 'Reloj suizo con correa de cuero premium',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=600&fit=crop',
    category: 'accesorios',
    stock: 5,
  },
  {
    id: '19',
    name: 'Bufanda de Seda',
    price: 899,
    description: 'Bufanda de seda natural con estampado exclusivo',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&h=600&fit=crop',
    category: 'accesorios',
    stock: 25,
  },
  {
    id: '20',
    name: 'Cinturón de Cuero Trenzado',
    price: 1299,
    description: 'Cinturón artesanal con hebilla de plata',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583aa?w=500&h=600&fit=crop',
    category: 'accesorios',
    stock: 15,
  },
  {
    id: '21',
    name: 'Gafas de Sol Premium',
    price: 2499,
    description: 'Gafas con lentes polarizados y marco de acetato',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=600&fit=crop',
    category: 'accesorios',
    stock: 12,
  },
  {
    id: '22',
    name: 'Joyería de Diseñador',
    price: 1899,
    description: 'Set de collar y aretes en plata esterlina',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=600&fit=crop',
    category: 'accesorios',
    stock: 10,
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
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 8,
                      },
                    }}
                  >
                    <Box 
                      sx={{ 
                        position: 'relative', 
                        overflow: 'hidden',
                        height: 350,
                        bgcolor: 'grey.100',
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="350"
                        image={product.image}
                        alt={product.name}
                        sx={{
                          objectFit: 'cover',
                          width: '100%',
                          height: '100%',
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

                    <CardContent 
                      sx={{ 
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: 220,
                        p: 3,
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'secondary.main',
                          fontWeight: 600,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
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
                          minHeight: 60,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {product.name}
                      </Typography>
                      
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ 
                          mb: 2,
                          flexGrow: 1,
                          minHeight: 40,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {product.description}
                      </Typography>
                      
                      <Box>
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
                      </Box>
                    </CardContent>

                    <CardActions sx={{ p: 3, pt: 0 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        startIcon={<AddShoppingCart />}
                        onClick={() => handleAddToCart(product)}
                        disabled={product.stock === 0}
                        sx={{
                          backgroundColor: 'primary.main',
                          py: 1.5,
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          '&:hover': {
                            backgroundColor: 'secondary.main',
                            color: 'primary.main',
                            transform: 'translateY(-2px)',
                            boxShadow: 4,
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
