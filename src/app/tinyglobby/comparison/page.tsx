import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1>library comparison</h1>
      <h2>Syntax</h2>
      <p>
        <code>tinyglobby</code> supports the same glob syntax{' '}
        <Link href="https://github.com/micromatch/picomatch" target="_blank">
          <code>picomatch</code>
        </Link>{' '}
        (the underlying matching library) provides.
      </p>
      <p>
        <Link href="https://github.com/sindresorhus/globby" target="_blank">
          <code>globby</code>
        </Link>{' '}
        and{' '}
        <Link href="https://github.com/mrmlnc/fast-glob" target="_blank">
          <code>fast-glob</code>
        </Link>{' '}
        use{' '}
        <Link href="https://github.com/micromatch/micromatch" target="_blank">
          <code>micromatch</code>
        </Link>{' '}
        under the hood, a library that wraps around <code>picomatch</code> to support advanced brace expansions at the
        cost of{' '}
        <Link href="https://npmgraph.js.org/?q=micromatch" target="_blank">
          four subdependencies
        </Link>
        .
      </p>
      <p>
        Despite{' '}
        <Link href="https://github.com/micromatch/picomatch#braces" target="_blank">
          mentioning the opposite
        </Link>{' '}
        in its README, <code>picomatch</code> does support brace expansions, although the support is pretty minimal
      </p>
      <p>This leads to the following differences in brace patterns:</p>
      <ul>
        <li>
          Zero-padded ranges ("<code>{'{01..03}'}</code>") are not supported
        </li>
        <li>
          Step ranges ("<code>{'{1..5..2}'}</code>") are not evaluated
        </li>
      </ul>
      <p>
        In practice, this does not really affect users, as apparently these are features only used very rarely if at
        all. <code>tinyglobby</code> has never come across a user report of something breaking after switching due to
        the lack of these brace features.
      </p>
    </main>
  );
}
