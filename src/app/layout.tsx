import { Header } from '@/components/Header';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

import './global.css';

export const metadata: Metadata = {
  title: {
    template: '%s | superchupu',
    default: "superchupu's tiny website"
  },
  description: 'work in progress',
  metadataBase: new URL('https://superchupu.pages.dev')
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
