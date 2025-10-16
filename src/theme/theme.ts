import { createTheme } from '@mui/material/styles';

// Tema personalizado para Victoria Montoya Boutique
// Basado en la identidad visual del branding corporativo
export const theme = createTheme({
  palette: {
    primary: {
      main: '#1a1a1a', // Negro profundo elegante
      light: '#3d3d3d',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#c9a961', // Dorado champagne elegante
      light: '#e3c78a',
      dark: '#9a7f3f',
      contrastText: '#000000',
    },
    background: {
      default: '#f5f5f5', // Gris claro sofisticado
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#5a5a5a',
    },
    error: {
      main: '#d32f2f',
    },
    success: {
      main: '#388e3c',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Playfair Display", "Roboto", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      letterSpacing: '0.02em',
      fontSize: '3.5rem',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      letterSpacing: '0.02em',
      fontSize: '2.75rem',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2rem',
    },
    h4: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      letterSpacing: '0.01em',
    },
    h5: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 500,
      fontSize: '1rem',
    },
    body1: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      fontFamily: '"Montserrat", sans-serif',
      textTransform: 'uppercase',
      fontWeight: 600,
      letterSpacing: '0.12em',
      fontSize: '0.875rem',
    },
    subtitle1: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 2,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.05)',
    '0px 4px 8px rgba(0,0,0,0.08)',
    '0px 6px 12px rgba(0,0,0,0.10)',
    '0px 8px 16px rgba(0,0,0,0.12)',
    '0px 10px 20px rgba(0,0,0,0.14)',
    '0px 12px 24px rgba(0,0,0,0.16)',
    '0px 14px 28px rgba(0,0,0,0.18)',
    '0px 16px 32px rgba(0,0,0,0.20)',
    '0px 18px 36px rgba(0,0,0,0.22)',
    '0px 20px 40px rgba(0,0,0,0.24)',
    '0px 22px 44px rgba(0,0,0,0.26)',
    '0px 24px 48px rgba(0,0,0,0.28)',
    '0px 26px 52px rgba(0,0,0,0.30)',
    '0px 28px 56px rgba(0,0,0,0.32)',
    '0px 30px 60px rgba(0,0,0,0.34)',
    '0px 32px 64px rgba(0,0,0,0.36)',
    '0px 34px 68px rgba(0,0,0,0.38)',
    '0px 36px 72px rgba(0,0,0,0.40)',
    '0px 38px 76px rgba(0,0,0,0.42)',
    '0px 40px 80px rgba(0,0,0,0.44)',
    '0px 42px 84px rgba(0,0,0,0.46)',
    '0px 44px 88px rgba(0,0,0,0.48)',
    '0px 46px 92px rgba(0,0,0,0.50)',
    '0px 48px 96px rgba(0,0,0,0.52)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '14px 36px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          borderRadius: '2px',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
          },
        },
        contained: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          borderRadius: '4px',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 12px 28px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          letterSpacing: '0.02em',
        },
      },
    },
  },
});
