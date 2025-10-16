import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { theme } from './theme/theme';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductCatalog from './components/ProductCatalog';
import Features from './components/Features';
import AboutUs from './components/AboutUs';

function App() {
  const [showAboutUs, setShowAboutUs] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh' }}>
        <Navbar onAboutUsClick={() => setShowAboutUs(true)} onHomeClick={() => setShowAboutUs(false)} />
        {showAboutUs ? (
          <AboutUs />
        ) : (
          <>
            <HeroSection />
            <Features />
            <ProductCatalog />
          </>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
