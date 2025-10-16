import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { theme } from './theme/theme';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductCatalog from './components/ProductCatalog';
import Features from './components/Features';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh' }}>
        <Navbar />
        <HeroSection />
        <Features />
        <ProductCatalog />
      </Box>
    </ThemeProvider>
  );
}

export default App;
