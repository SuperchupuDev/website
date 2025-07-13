'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header>
      <Link href="/">home</Link>
      &nbsp;&nbsp;
      <Link href="/blog">blog</Link>
      &nbsp;&nbsp;
      <Link href="https://github.com/SuperchupuDev" target="_blank" rel="noreferrer">
        github
      </Link>
      &nbsp;&nbsp;
      <Link href="https://bsky.app/profile/superchupu.dev" target="_blank" rel="noreferrer">
        bluesky
      </Link>
      &nbsp;&nbsp;
      <Link href="https://github.com/sponsors/SuperchupuDev" target="_blank" rel="noreferrer">
        sponsor
      </Link>
      &nbsp;&nbsp;
      <select
        id="theme-selector"
        aria-label="Theme selector"
        value={mounted ? theme : ''}
        onChange={e => setTheme(e.target.value)}
      >
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </header>
  );
};
