import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { SidebarContent } from '#components/SidebarContent.tsx';

export const metadata: Metadata = {
  title: { template: '%s | tinyglobby', default: 'tinyglobby' },
  description: 'A fast and minimal alternative to globby and fast-glob'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <button type="button" popoverTarget="sidebar-dialog" popoverTargetAction="show" className="sidebar-button">
        ☰
      </button>
      <dialog id="sidebar-dialog" popover="auto">
        <aside>
          <SidebarContent />
        </aside>
      </dialog>
      <aside id="main-sidebar">
        <SidebarContent />
      </aside>
      {children}
    </>
  );
}
