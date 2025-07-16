import Link from 'next/link';
import type * as tinyglobby from 'tinyglobby';

const EntryOrOption = ({ name }: { name: keyof tinyglobby.GlobOptions | keyof typeof tinyglobby }) => (
  <li>
    <Link href={`/tinyglobby/documentation#${name}`}>
      <code>{name}</code>
    </Link>
  </li>
);

export const SidebarContent = () => (
  <ul>
    <li>
      <Link href="/tinyglobby">tinyglobby</Link>
    </li>
    <li>
      <Link href="/tinyglobby/documentation">documentation</Link>
    </li>
    <ul>
      <li>
        <Link href="/tinyglobby/documentation#api">api</Link>
      </li>
      <ul>
        <EntryOrOption name="glob" />
        <EntryOrOption name="globSync" />
        <EntryOrOption name="convertPathToPattern" />
        <EntryOrOption name="escapePath" />
        <EntryOrOption name="isDynamicPattern" />
      </ul>
      <li>
        <Link href="/tinyglobby/documentation#options">options</Link>
      </li>
      <ul>
        <EntryOrOption name="absolute" />
        <EntryOrOption name="caseSensitiveMatch" />
        <EntryOrOption name="cwd" />
        <EntryOrOption name="debug" />
        <EntryOrOption name="deep" />
        <EntryOrOption name="dot" />
        <EntryOrOption name="expandDirectories" />
        <EntryOrOption name="followSymbolicLinks" />
        <EntryOrOption name="ignore" />
        <EntryOrOption name="onlyDirectories" />
        <EntryOrOption name="onlyFiles" />
      </ul>
    </ul>
  </ul>
);
