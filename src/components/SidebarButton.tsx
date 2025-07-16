// biome-ignore-all lint/a11y/useKeyWithClickEvents: too hard to figure out right now
'use client';

import { useRef } from 'react';
import { SidebarContent } from './SidebarContent.tsx';

export const SidebarButton = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openSidebar() {
    dialogRef.current?.showModal();
  }

  function closeSidebar() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button type="button" className="sidebar-button" onClick={openSidebar}>
        ☰
      </button>

      <dialog ref={dialogRef} className="sidebar-dialog" onClick={closeSidebar}>
        <aside className="sidebar-content" onClick={e => e.stopPropagation()}>
          <SidebarContent />
        </aside>
      </dialog>
    </>
  );
};
