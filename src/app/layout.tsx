import { Header } from '@/components/Header';
import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

import './global.css';

export const metadata: Metadata = {
  title: {
    template: '%s | superchupu',
    default: "superchupu's tiny website"
  },
  description: 'work in progress',
  metadataBase: new URL('https://superchupu.dev')
};

export const viewport: Viewport = {
  themeColor: '#ffc0cb'
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/meee.png" type="image/png" />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
