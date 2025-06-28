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
        hover: '#F9FAFB',
      },
      text: {
        primary: mode === 'light' ? '#1E293B' : '#ffffff',
        secondary: mode === 'light' ? '#64748B' : '#ffffff',
      },
    },
    shape: {
      borderRadius: 12,
    },
    typography: {
      fontFamily: ['"Roboto"', 'sans-serif'].join(','),
    },
  } as ThemeOptions);
