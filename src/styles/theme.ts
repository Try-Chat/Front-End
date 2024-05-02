import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    grey: {
      50: '#f8f9fa',
      100: '#f1f3f5',
      200: '#dee2e6',
      300: '#ced4da',
      400: '#868e96',
      500: '#495057',
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: 'Pretendard',

    h3: {
      fontSize: '1.4rem',
    },
    subtitle1: {
      fontSize: '1.2rem',
    },
    subtitle2: {
      fontSize: '1rem',
    },
    body1: {
      fontSize: '0.8rem',
    },
    body2: {
      fontSize: '0.6rem',
    },
  },
});

export default theme;
