import { createTheme, ThemeOptions } from '@mui/material/styles';

const theme = createTheme();

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme(theme, {
    palette: {
      mode,
      background: {
        default: mode === 'light' ? '#f4f8fd' : '#121212',
        paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
      },
      primary: {
        main: '#3b7ddd',
        dark: '#2f68c5',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#f44336',
        contrastText: '#ffffff',
      },
      text: {
        primary: mode === 'light' ? '#1f1f1f' : '#ffffff',
        secondary: mode === 'light' ? '#5a5a5a' : '#b0b0b0',
      },
    },
    typography: {
      fontFamily: ['"Roboto"', 'sans-serif'].join(','),
      h2: {
        fontWeight: 500,
        fontSize: '1.8rem',
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.65rem',
        },
      },
      h3: {
        fontWeight: 500,
        fontSize: '1.4rem',
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.15rem',
        },
      },
      h5: {
        fontWeight: 500,
        fontSize: '1.25rem',
        [theme.breakpoints.down('sm')]: {
          fontSize: '1rem',
        },
      },
      body1: { fontSize: '1rem' },
      button: { textTransform: 'none', fontWeight: 500 },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiPickersDay: {
        styleOverrides: {
          root: {
            color: '#1565c0',
            borderRadius: '2px',
            borderWidth: '1px',
            borderColor: '#2196f3',
            border: '1px solid',
            backgroundColor: '#90caf9',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            transition: 'background 0.3s',
          },
          containedPrimary: {
            backgroundColor: '#3b7ddd',
            '&:hover': { backgroundColor: '#2f68c5' },
          },
          outlinedPrimary: {
            color: '#3b7ddd',
            borderColor: '#3b7ddd',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: mode === 'light' ? '#e4efff' : '#2f68c5',
              color: '#ffffff',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            transition: 'background 0.3s',
            backgroundColor: mode === 'light' ? '#ffffff' : '#1e1e1e',
            '&:hover': {
              backgroundColor: mode === 'light' ? '#f0f7ff' : '#2a2a2a',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { fontWeight: 500 },
          colorSecondary: {
            backgroundColor: '#f44336',
            color: '#ffffff',
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            height: 8,
            borderRadius: 5,
            backgroundColor: mode === 'light' ? '#e0e0e0' : '#3a3a3a',
          },
          bar: {
            borderRadius: 5,
            backgroundColor: '#3b7ddd',
          },
        },
      },
    },
  } as ThemeOptions);
