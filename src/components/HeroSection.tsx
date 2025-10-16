import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowDownward, TrendingUp } from '@mui/icons-material';

const HeroSection: React.FC = () => {
  const scrollToProducts = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #1a1a1a 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23c9a961" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3,
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box textAlign="center" sx={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: 'secondary.main',
                  mb: 2,
                  letterSpacing: '0.3em',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                }}
              >
                Boutique de Lujo
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  fontSize: { xs: '3rem', sm: '4rem', md: '5.5rem', lg: '7rem' },
                  fontWeight: 700,
                  mb: 2,
                  textShadow: '0 4px 30px rgba(201, 169, 97, 0.4)',
                  lineHeight: 1.1,
                }}
              >
                Victoria Montoya
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Box
                sx={{
                  width: { xs: 60, md: 80 },
                  height: 3,
                  bgcolor: 'secondary.main',
                  mx: 'auto',
                  mb: 4,
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  mb: 5,
                  maxWidth: '700px',
                  mx: 'auto',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  fontSize: { xs: '1.1rem', md: '1.4rem' },
                  px: 2,
                }}
              >
                Elegancia atemporal en cada prenda. Descubre nuestra colección exclusiva
                que define tu estilo único con sofisticación y distinción.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap', mb: 6 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<TrendingUp />}
                  onClick={scrollToProducts}
                  sx={{
                    backgroundColor: 'secondary.main',
                    color: 'primary.main',
                    px: 5,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    '&:hover': {
                      backgroundColor: 'rgba(201, 169, 97, 0.1)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(201, 169, 97, 0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Ver Colección
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  onClick={scrollToProducts}
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    color: 'white',
                    px: 5,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: 'secondary.main',
                      backgroundColor: 'rgba(201, 169, 97, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Explorar
                </Button>
              </Box>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Box
                onClick={scrollToProducts}
                sx={{
                  cursor: 'pointer',
                  display: 'inline-flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                  mt: 4,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: 'secondary.main',
                    letterSpacing: '0.2em',
                    fontWeight: 500,
                  }}
                >
                  DESCUBRE MÁS
                </Typography>
                <ArrowDownward sx={{ color: 'secondary.main', fontSize: 32 }} />
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;
