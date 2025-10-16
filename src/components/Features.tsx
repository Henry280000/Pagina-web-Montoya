import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { LocalShipping, VerifiedUser, CardGiftcard, SupportAgent } from '@mui/icons-material';

const Features: React.FC = () => {
  const features = [
    {
      icon: <LocalShipping sx={{ fontSize: 50, color: 'secondary.main' }} />,
      title: 'Envío Gratis',
      description: 'En compras superiores a $1,500 MXN',
    },
    {
      icon: <VerifiedUser sx={{ fontSize: 50, color: 'secondary.main' }} />,
      title: 'Calidad Garantizada',
      description: 'Prendas de la más alta calidad',
    },
    {
      icon: <CardGiftcard sx={{ fontSize: 50, color: 'secondary.main' }} />,
      title: 'Regalos Especiales',
      description: 'Envoltorio de regalo en todas tus compras',
    },
    {
      icon: <SupportAgent sx={{ fontSize: 50, color: 'secondary.main' }} />,
      title: 'Asesoría Personalizada',
      description: 'Estilistas a tu disposición',
    },
  ];

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    height: '100%',
                    backgroundColor: 'transparent',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 1,
                      fontWeight: 600,
                      color: 'primary.main',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {feature.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
