import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Storefront,
  Visibility,
  EmojiEvents,
  FavoriteBorder,
} from '@mui/icons-material';

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

const AboutUs: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const values = [
    {
      icon: <EmojiEvents sx={{ fontSize: 48, color: 'secondary.main' }} />,
      title: 'Excelencia',
      description: 'Nos comprometemos a ofrecer productos de la más alta calidad y un servicio excepcional.',
    },
    {
      icon: <FavoriteBorder sx={{ fontSize: 48, color: 'secondary.main' }} />,
      title: 'Pasión',
      description: 'La moda es nuestra pasión y se refleja en cada prenda que seleccionamos.',
    },
    {
      icon: <Storefront sx={{ fontSize: 48, color: 'secondary.main' }} />,
      title: 'Innovación',
      description: 'Constantemente buscamos las últimas tendencias para mantener nuestro catálogo actualizado.',
    },
    {
      icon: <Visibility sx={{ fontSize: 48, color: 'secondary.main' }} />,
      title: 'Autenticidad',
      description: 'Cada pieza en nuestra boutique es cuidadosamente seleccionada para reflejar autenticidad.',
    },
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Encabezado */}
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 8 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              color: 'primary.main',
              fontWeight: 700,
            }}
          >
            Sobre Nosotros
          </Typography>
          <Divider
            sx={{
              width: '100px',
              height: '3px',
              bgcolor: 'secondary.main',
              mx: 'auto',
              mb: 3,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              fontWeight: 300,
            }}
          >
            Elegancia, calidad y distinción en cada prenda
          </Typography>
        </MotionBox>

        {/* Quiénes Somos */}
        <MotionPaper
          {...fadeIn}
          elevation={0}
          sx={{
            p: 6,
            mb: 6,
            bgcolor: 'white',
            borderLeft: '4px solid',
            borderColor: 'secondary.main',
          }}
        >
          <Typography variant="h4" sx={{ mb: 3, color: 'primary.main', fontWeight: 600 }}>
            ¿Quiénes Somos?
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            Victoria Montoya Boutique es una marca de moda exclusiva que nació de la pasión por la
            elegancia y el estilo refinado. Desde nuestros inicios, nos hemos dedicado a ofrecer
            prendas de alta calidad que combinan las últimas tendencias internacionales con un toque
            de sofisticación atemporal.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            Nuestra boutique se ha convertido en el destino preferido para quienes buscan moda
            exclusiva, con colecciones cuidadosamente curadas que abarcan desde vestidos elegantes
            hasta accesorios de lujo, siempre manteniendo nuestro compromiso con la calidad y el
            servicio personalizado.
          </Typography>
        </MotionPaper>

        {/* Misión y Visión */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <MotionPaper
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              elevation={2}
              sx={{
                p: 5,
                height: '100%',
                bgcolor: 'primary.main',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: -20,
                  right: -20,
                  width: 150,
                  height: 150,
                  borderRadius: '50%',
                  bgcolor: 'secondary.main',
                  opacity: 0.1,
                }}
              />
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, position: 'relative' }}>
                Nuestra Misión
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, position: 'relative' }}>
                Transformar la experiencia de compra de moda en un viaje memorable, ofreciendo
                prendas de calidad excepcional que empoderen a nuestros clientes y les permitan
                expresar su individualidad con confianza y elegancia.
              </Typography>
            </MotionPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <MotionPaper
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              elevation={2}
              sx={{
                p: 5,
                height: '100%',
                bgcolor: 'secondary.main',
                color: 'primary.main',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -20,
                  left: -20,
                  width: 150,
                  height: 150,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  opacity: 0.1,
                }}
              />
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, position: 'relative' }}>
                Nuestra Visión
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, position: 'relative' }}>
                Ser la boutique de moda más reconocida y respetada, estableciendo nuevos estándares
                de excelencia en el mercado y siendo sinónimo de elegancia, calidad y distinción a
                nivel nacional e internacional.
              </Typography>
            </MotionPaper>
          </Grid>
        </Grid>

        {/* Valores */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: 'primary.main',
              fontWeight: 600,
            }}
          >
            Nuestros Valores
          </Typography>
          <Grid
            container
            spacing={4}
            component={motion.div}
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <MotionPaper
                  variants={fadeIn}
                  elevation={1}
                  sx={{
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{value.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}
                  >
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                    {value.description}
                  </Typography>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Compromiso */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          sx={{
            mt: 8,
            p: 6,
            bgcolor: 'background.paper',
            borderRadius: 2,
            textAlign: 'center',
            boxShadow: 3,
          }}
        >
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
            Nuestro Compromiso
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', lineHeight: 1.8 }}>
            En Victoria Montoya Boutique, cada cliente es único y merece una experiencia de compra
            excepcional. Nos comprometemos a ofrecer atención personalizada, productos de calidad
            superior y un ambiente que refleje la elegancia y sofisticación que nos caracteriza.
          </Typography>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default AboutUs;
