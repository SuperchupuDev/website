import { ThreeBarsIcon } from '@primer/octicons-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { EditPageLink } from '#components/EditPageLink.tsx';
import { SidebarEntry } from '#components/SidebarEntry.tsx';

import './styles.css';

export const metadata: Metadata = {
  title: { template: '%s | tinyglobby', default: 'tinyglobby' },
  description: 'A fast and minimal alternative to globby and fast-glob'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <button id="sidebar-button" type="button" popoverTarget="sidebar" popoverTargetAction="show">
        <ThreeBarsIcon />
      </button>
      <aside id="sidebar" popover="auto">
        <ul>
          <li>
            <Link href="/tinyglobby">tinyglobby</Link>
          </li>
          <li>
            <Link href="/tinyglobby/comparison">comparison</Link>
          </li>
          <li>
            <Link href="/tinyglobby/migration">migration guide</Link>
          </li>
          <li>
            <Link href="/tinyglobby/documentation">documentation</Link>
          </li>
          <ul>
            <li>
              <Link href="/tinyglobby/documentation#api">api</Link>
            </li>
            <ul>
              <SidebarEntry name="glob" />
              <SidebarEntry name="globSync" />
              <SidebarEntry name="convertPathToPattern" />
              <SidebarEntry name="escapePath" />
              <SidebarEntry name="isDynamicPattern" />
            </ul>
            <li>
              <Link href="/tinyglobby/documentation#options">options</Link>
            </li>
            <ul>
              <SidebarEntry name="absolute" />
              <SidebarEntry name="braceExpansion" />
              <SidebarEntry name="caseSensitiveMatch" />
              <SidebarEntry name="cwd" />
              <SidebarEntry name="debug" />
              <SidebarEntry name="deep" />
              <SidebarEntry name="dot" />
              <SidebarEntry name="expandDirectories" />
              <SidebarEntry name="extglob" />
              <SidebarEntry name="followSymbolicLinks" />
              <SidebarEntry name="globstar" />
              <SidebarEntry name="ignore" />
              <SidebarEntry name="onlyDirectories" />
              <SidebarEntry name="onlyFiles" />
              <SidebarEntry name="signal" />
            </ul>
          </ul>
        </ul>
      </aside>
      {children}
      <EditPageLink />
    </>
  );
}
