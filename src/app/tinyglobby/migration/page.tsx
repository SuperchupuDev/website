import dedent from 'dedent';
import Link from 'next/link';
import { Code } from '#components/Code.tsx';

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
          import { glob } from 'tinyglobby';

          async function globWithGitignore(patterns, options = {}) {
            const { cwd = process.cwd(), ...restOptions } = options;

            try {
              const gitIgnored = execSync(
                'git ls-files --others --ignored --exclude-standard --directory',
                { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }
              )
              .split('\n')
              .filter(Boolean);

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
      <strong>Before:</strong>
      <Code lang="ts">
        {dedent`
          import glob from 'fast-glob';

          await glob('src/*.ts');
        `}
      </Code>
      <strong>After:</strong>
      <Code lang="ts">
        {dedent`
          import { glob } from 'tinyglobby';

          await glob('src/*.ts', {
            expandDirectories: false
          });
        `}
      </Code>
    </main>
  );
}
