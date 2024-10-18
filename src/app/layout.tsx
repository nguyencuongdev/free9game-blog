import type { Metadata } from 'next';
import './globals.css';
import { poppins } from '@/assets/fonts';
import { DefaultLayout } from '@/layouts';

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
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
