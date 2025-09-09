import dedent from 'dedent';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Code } from '#components/Code.tsx';

export const metadata: Metadata = {
  title: 'migration guide'
};

export default function Page() {
  return (
    <main>
      <h1>tinyglobby migration guide</h1>
      <h2 id="tips">General tips</h2>
      <p>
        Try to avoid crawling outside the{' '}
        <Link href="/tinyglobby/documentation#cwd">
          <code>cwd</code>
        </Link>
        , as doing that makes <code>tinyglobby</code> use a path calculation algorithm that's considerably slower. This
        also applies when enabling the{' '}
        <Link href="/tinyglobby/documentation#absolute">
          <code>absolute</code>
        </Link>{' '}
        option.
      </p>
      <p>
        See{' '}
        <Link href="/tinyglobby/documentation#cwd">
          <code>cwd</code>'s documentation
        </Link>{' '}
        for more details.
      </p>
      <h2 id="globby">Switching from globby</h2>
      <p>
        <code>tinyglobby</code> aims to be a drop-in replacement to <code>globby</code> for the vast majority of use
        cases. You won't need to change anything most of the time. Since <code>globby</code> is a wrapper of{' '}
        <code>fast-glob</code>, you might want to also check out the{' '}
        <Link href="#fast-glob">switching from fast-glob section</Link>.
      </p>
      <h3>
        <code id="gitignore" className="inline-code-heading">
          gitignore
        </code>
      </h3>
      <p>
        <code>globby</code> has a <code>gitignore</code> option that makes gitignored files get excluded from the
        results. <code>tinyglobby</code> does not implement this option as it's barely used and it would take an
        increase in dependencies to add. It's also apparently{' '}
        <Link href="https://github.com/sindresorhus/globby/issues/50" target="_blank">
          really slow in <code>globby</code>
        </Link>
        .
      </p>
      <p>
        To make <code>tinyglobby</code> exclude gitignored files, you can use the following workaround by taking
        advantage of <code>git</code>'s{' '}
        <Link href="https://git-scm.com/docs/git-ls-files" target="_blank">
          <code>ls-files</code>
        </Link>{' '}
        command:
      </p>
      <Code lang="ts">
        {dedent.withOptions({ escapeSpecialCharacters: false })`
          import { execSync } from 'node:child_process';
          import { glob, escapePath } from 'tinyglobby';

          async function globWithGitignore(patterns, options = {}) {
            const { cwd = process.cwd(), ...restOptions } = options;

            try {
              const gitIgnored = execSync(
                'git ls-files --others --ignored --exclude-standard --directory',
                { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }
              )
              .split('\n')
              .filter(Boolean)
              .map(p => escapePath(p));

              return glob(patterns, {
                ...restOptions,
                cwd,
                ignore: [...(restOptions.ignore || []), ...gitIgnored]
              });
            } catch {
              return glob(patterns, options);
            }
          }
        `}
      </Code>
      <em>
        Thank you{' '}
        <Link href="https://github.com/outslept" target="_blank">
          outslept
        </Link>{' '}
        for contributing this snippet.
      </em>
      <h2 id="fast-glob">Switching from fast-glob</h2>
      <h3>
        <code id="expandDirectories" className="inline-code-heading">
          expandDirectories
        </code>
      </h3>
      <p>
        You should disable the{' '}
        <Link href="/tinyglobby/documentation#expandDirectories">
          <code>expandDirectories</code>
        </Link>{' '}
        option. It's only there for compatibility with <code>globby</code>. I've seen almost everyone switching from{' '}
        <code>fast-glob</code> forget to do this. In 99% of cases, you want this off, unless you want to recreate how{' '}
        <code>globby</code> works. Looking back this option should probably have been disabled by default.
      </p>
      <Code lang="ts">
        {dedent`
          import glob from 'fast-glob';// [!code --]
          import { glob } from 'tinyglobby';// [!code ++]

          await glob('src/*.ts', {
            expandDirectories: false// [!code ++]
          });
        `}
      </Code>
      <h3>
        <code id="deep" className="inline-code-heading">
          deep
        </code>
      </h3>
      <p>
        This option works in a different way than <code>fast-glob</code>. See the{' '}
        <Link href="/tinyglobby/comparison">library comparison</Link> page for an in-depth explanation of how the
        implementations differ.
      </p>
      <h3>
        <code id="fs" className="inline-code-heading">
          fs
        </code>
      </h3>
      <p>
        <code>tinyglobby</code>'s{' '}
        <Link href="/tinyglobby/documentation#fs">
          <code>fs</code>
        </Link>{' '}
        option accepts different functions as <code>fast-glob</code>, you might need to change your usage to account for
        this.
      </p>
      <p>
        Currently, the only difference in the object is that instead of accepting an <code>lstat</code> function, it
        accepts a <code>realpath</code> function instead.
      </p>
      <p>A migration can look like this:</p>
      <Code lang="ts">
        {dedent`
          import glob from 'fast-glob';// [!code --]
          import { glob } from 'tinyglobby';// [!code ++]

          await glob('src/*.ts', {
            expandDirectories: false,// [!code ++]
            fs: {
              lstat: myFs.lstat,// [!code --]
              realpath: myFs.realpath,// [!code ++]
              readdir: myFs.readdir,
              stat: myFs.stat
            }
          });
        `}
      </Code>
    </main>
  );
}
