'use client';

import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import { poppins } from '@/assets/fonts';
import { Header, Footer } from '@/components';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <body className={`${poppins.className} antialiased`}>
        <Header />
        <Box>{children}</Box>
        <Footer />
      </body>
    </ThemeProvider>
  );
}
