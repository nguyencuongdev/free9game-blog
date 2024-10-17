import type { Metadata } from 'next';
import { Box } from '@mui/material';

import '../globals.css';
import { poppins } from '@/assets/fonts';
import { Header, Footer } from '@/components';

export const metadata: Metadata = {
  title: 'Ultimate H5 Games Portal',
  description:
    'Everything you want to know about games and apps — news, latest releases, reviews, lists of best items, and guides — is in one place, free9game.com.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} antialiased`}>
        <Header />
        <Box>{children}</Box>
        <Footer />
      </body>
    </html>
  );
}
