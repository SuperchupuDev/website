import Link from 'next/link';
import type * as tinyglobby from 'tinyglobby';

export const SidebarEntry = ({ name }: { name: keyof tinyglobby.GlobOptions | keyof typeof tinyglobby }) => (
  <li>
    <Link href={`/tinyglobby/documentation#${name}`}>
      <code>{name}</code>
    </Link>
  </li>
);
