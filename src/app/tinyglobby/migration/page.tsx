import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1>tinyglobby migration guide (wip)</h1>
      <h2>General tips</h2>
      <p>
        please try to avoid crawling outside the directory specified as the{' '}
        <Link href="/tinyglobby/documentation#cwd">
          <code>cwd</code>
        </Link>
        , doing that makes <code>tinyglobby</code> use a path calculation algorithm that's considerably slower.
      </p>
      <h2>Switching from globby</h2>
      <p>nothing much except in the very rare cases you want to use the gitignore option</p>
      <h2>Switching from fast-glob</h2>
      <p>
        PLEASE disable the{' '}
        <Link href="/tinyglobby/documentation#expandDirectories">
          <code>expandDirectories</code>
        </Link>{' '}
        option. It's there for compatibility with <code>globby</code>. I've seen almost everyone switching from{' '}
        <code>fast-glob</code> forget to do this. In 99% of cases, you want this off, unless you want to recreate how{' '}
        <code>globby</code> works. Looking back this option should probably have been disabled by default.
      </p>
    </main>
  );
}
