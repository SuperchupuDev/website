import dedent from 'dedent';
import Link from 'next/link';
import { Code } from '#components/Code.tsx';

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
        in its README, <code>picomatch</code> does support brace expansions, although the support is pretty minimal.
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
      <h2>Options</h2>
      <h3>
        <code className="inline-code-heading">expandDirectories</code>
      </h3>
      <p>
        <code>tinyglobby</code> enables the{' '}
        <Link href="/tinyglobby/documentation#expandDirectories">
          <code>expandDirectories</code>
        </Link>{' '}
        option by default. This option works the same as <code>globby</code>'s{' '}
        <Link href="https://github.com/sindresorhus/globby#expanddirectories" target="_blank">
          <code>expandDirectories</code> option
        </Link>
        , with the difference that it only supports setting it to a boolean.
      </p>
      <p>
        This option is <strong>enabled</strong> by default for the purpose of matching <code>globby</code>, but it
        should be disabled if not migrating from that library. No other glob library has this functionality.
      </p>
      <p>
        {/*               wow so strong */}
        As such it's <strong>strongly</strong> recommended to set it to <code>false</code>, unless you are explicitly
        migrating from <code>globby</code> and you want it to keep working the same way.
      </p>
      <Code lang="ts">
        {dedent`
          import { glob } from 'tinyglobby';

          await glob('src/*.ts', {
            expandDirectories: false
          });
        `}
      </Code>
      <h2>Results</h2>
      <p>
        The format of the results is not affected in any way by the patterns used. This means that providing an absolute
        pattern will not result in an absolute path being returned. Use the{' '}
        <Link href="/tinyglobby/documentation#absolute">
          <code>absolute</code>
        </Link>{' '}
        option if you want the returned paths to be absolute.
      </p>
      <p>This doesn't happen in any other glob library, so it's important to keep it in mind for some use cases.</p>
      <Code lang="ts">
        {dedent`
          import assert from 'node:assert/strict';
          import { glob as nativeGlob } from 'node:fs/promises';
          import { glob } from 'tinyglobby';

          const files = await glob(['./package.json', '/home/meow/project/luigi.png'], {
            expandDirectories: false
          });

          const files2 = await Array.fromAsync(
            nativeGlob(['./package.json', '/home/meow/project/luigi.png'])
          );

          // tinyglobby always produces the same paths format
          assert.deepEqual(files.sort(), ['package.json', 'luigi.png']);

          // other libraries do not
          assert.deepEqual(files2.sort(), ['./package.json', '/home/meow/project/luigi.png']);
        `}
      </Code>
    </main>
  );
}
