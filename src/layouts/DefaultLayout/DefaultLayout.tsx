'use client';

import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import { Header, Footer } from '@/components';
import { createContext, useState } from 'react';

export type ContextCommonType = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};
export const ContextCommon = createContext({});

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <ThemeProvider theme={theme}>
      <ContextCommon.Provider value={{ loading, setLoading }}>
        <CssBaseline />
        <Header />
        <Box>{children}</Box>
        <Footer />
      </ContextCommon.Provider>
    </ThemeProvider>
  );
}
