import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { SidebarButton } from '#components/SidebarButton.tsx';
import { SidebarContent } from '#components/SidebarContent.tsx';

export const metadata: Metadata = {
  title: { template: '%s | tinyglobby', default: 'tinyglobby' },
  description: 'A fast and minimal alternative to globby and fast-glob'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SidebarButton />
      <div className="sidebar">
        <SidebarContent />
      </div>
      {children}
    </>
  );
}
