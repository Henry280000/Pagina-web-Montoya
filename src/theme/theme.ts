import { createTheme } from '@mui/material/styles';

// Tema personalizado para Victoria Montoya Boutique
export const theme = createTheme({
  palette: {
    primary: {
      main: '#2c2c2c', // Negro elegante
      light: '#545454',
      dark: '#1a1a1a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#d4af37', // Dorado elegante
      light: '#f0d875',
      dark: '#9a7f1f',
      contrastText: '#000000',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c2c2c',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Roboto", "Arial", serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Roboto", "Arial", sans-serif',
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 600,
      letterSpacing: '0.1em',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '12px 32px',
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
          },
        },
      },
    },
  },
});
