import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowDownward } from '@mui/icons-material';

const HeroSection: React.FC = () => {
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
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23d4af37" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
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
            <Typography
              variant="h6"
              sx={{
                color: 'secondary.main',
                mb: 2,
                letterSpacing: '0.3em',
                fontWeight: 400,
              }}
            >
              BOUTIQUE DE LUJO
            </Typography>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  fontSize: { xs: '3rem', md: '5rem', lg: '6rem' },
                  fontWeight: 700,
                  mb: 3,
                  textShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
                }}
              >
                Victoria Montoya
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 5,
                  maxWidth: '700px',
                  mx: 'auto',
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                Elegancia atemporal en cada prenda. Descubre nuestra colección exclusiva
                de moda boutique que define tu estilo único.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'secondary.main',
                    color: 'black',
                    px: 5,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': {
                      backgroundColor: 'secondary.light',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(212, 175, 55, 0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Ver Colección
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    px: 5,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': {
                      borderColor: 'secondary.main',
                      color: 'secondary.main',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(212, 175, 55, 0.2)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Contactar
                </Button>
              </Box>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ marginTop: '80px' }}
            >
              <ArrowDownward
                sx={{
                  fontSize: '3rem',
                  color: 'secondary.main',
                  opacity: 0.7,
                }}
              />
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;
