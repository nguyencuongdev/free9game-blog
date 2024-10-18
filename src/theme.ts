import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1200,
      xl: 1920,
    },
  },
  // typography: {
  //   fontFamily: 'Poppins", sans-serif',
  // },
});

export default theme;
