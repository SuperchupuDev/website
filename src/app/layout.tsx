import dedent from 'dedent';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Header } from '#components/Header.tsx';

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/meee.png" type="image/png" />
      </head>
      <body>
        <Header />
        <script>
          {dedent`
            const theme = localStorage.getItem('theme');
            if (theme) {
              document.getElementById('theme-selector').value = theme;
              console.log('[debug] yes hello that is me,', theme);
            }
          `}
        </script>
        {children}
      </body>
    </html>
  );
}
