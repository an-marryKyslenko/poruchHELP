import { createTheme, ThemeOptions } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#1976d2',
      },
      background: {
        default: mode === 'light' ? '#EAF4FC' : '#121212',
        paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
      },
      text: {
        primary: mode === 'light' ? '#1a1a1a' : '#ffffff',
      },
    },
    shape: {
      borderRadius: 12,
    },
    typography: {
      fontFamily: ['"Roboto"', 'sans-serif'].join(','),
    },
  } as ThemeOptions);
