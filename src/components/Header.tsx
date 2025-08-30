'use client';

import Link from 'next/link';

function saveTheme(theme: string) {
  localStorage.setItem('theme', theme);
}

export const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">home</Link>
        <Link href="/blog">blog</Link>
        <Link href="https://github.com/SuperchupuDev" target="_blank" rel="noreferrer">
          github
        </Link>
        <Link href="https://bsky.app/profile/superchupu.dev" target="_blank" rel="noreferrer">
          bluesky
        </Link>
        <Link href="https://github.com/sponsors/SuperchupuDev" target="_blank" rel="noreferrer">
          sponsor
        </Link>
      </nav>
      <select id="theme-selector" aria-label="Theme selector" onChange={e => saveTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </header>
  );
};
