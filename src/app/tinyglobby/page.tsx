import dedent from 'dedent';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { Code } from '#components/Code.tsx';
import projects from './projects.json' with { type: 'json' };

export default function Page() {
  return (
    <main>
      <h1>
        tinyglobby{' '}
        <small className="sub">
          (
          <Link target="_blank" href={'https://github.com/SuperchupuDev/tinyglobby'}>
            source
          </Link>
          ,{' '}
          <Link target="_blank" href={'https://npmjs.com/tinyglobby'}>
            npm
          </Link>
          )
        </small>
      </h1>
      <h2>A fast and minimal alternative to globby and fast-glob</h2>
      <Code lang="ts">
        {dedent`
          import { glob, globSync } from 'tinyglobby';

          await glob(['files/*.ts', '!**/*.d.ts'], { cwd: 'src' });
          globSync('src/**/*.ts', { ignore: '**/*.d.ts' });
        `}
      </Code>
      <p>
        This package was created as a minimal glob library that's as tiny and fast as possible, as most glob libraries
        nowadays{' '}
        <Link href="https://pkg-size.dev/glob" target="_blank">
          are bloated
        </Link>{' '}
        and{' '}
        <Link href="https://npmgraph.js.org/?q=globby#select=exact%3Ais-number%407.0.0" target="_blank">
          indirectly depend on
        </Link>{' '}
        code that isn't too optimal.
      </p>
      <p>
        It aims to be as close to a drop-in replacement to{' '}
        <Link href="https://github.com/sindresorhus/globby" target="_blank">
          <code>globby</code>
        </Link>{' '}
        and{' '}
        <Link href="https://github.com/mrmlnc/fast-glob" target="_blank">
          <code>fast-glob</code>
        </Link>{' '}
        as possible, since they both have{' '}
        <Link href="https://github.com/sindresorhus/globby#expanddirectories" target="_blank">
          certain
        </Link>{' '}
        <Link href="https://github.com/mrmlnc/fast-glob#how-to-exclude-directory-from-reading" target="_blank">
          behaviors
        </Link>{' '}
        not present in any other glob libraries, which aren't straightforward to recreate manually. You can read the{' '}
        <Link href="/tinyglobby/migration">migration guide</Link> for an in-depth explanation on how to switch.
      </p>
      <h3>Documentation</h3>
      <p>
        See the <Link href="/tinyglobby/documentation">documentation page</Link> for an overview of the library's API.
      </p>
      <h3 id="speed-and-size">Speed and Size</h3>
      <p>
        <code>tinyglobby</code> is{' '}
        <Link
          href="https://github.com/SuperchupuDev/tinyglobby/actions/workflows/benchmark.yml?query=event%3Apush%20branch%3Amain"
          target="_blank"
        >
          faster than other glob libraries
        </Link>{' '}
        in the vast majority of use cases. The difference gets bigger the more files you match.
      </p>
      <p>
        The reason it's so fast is not only because it was coded with performance in mind, but also because it relies on
        two extremely fast libraries,{' '}
        <Link href="https://github.com/thecodrr/fdir" target="_blank">
          <code>fdir</code>
        </Link>
        , the{' '}
        <Link href="https://github.com/thecodrr/fdir/blob/master/BENCHMARKS.md" target="_blank">
          fastest
        </Link>{' '}
        file system crawler and{' '}
        <Link href="https://github.com/micromatch/picomatch" target="_blank">
          <code>picomatch</code>
        </Link>
        , (almost) the fastest matcher. Both use{' '}
        <Link href="https://npmgraph.js.org/?q=fdir" target="_blank">
          zero
        </Link>{' '}
        <Link href="https://npmgraph.js.org/?q=picomatch" target="_blank">
          dependencies
        </Link>
        .
      </p>
      <p>
        In terms of size, <code>tinyglobby</code> currently has{' '}
        <Link href="https://pkg-size.dev/tinyglobby" target="_blank">
          170KB
        </Link>{' '}
        of package size, compared to <code>globby</code>'s{' '}
        <Link href="https://pkg-size.dev/globby" target="_blank">
          631KB
        </Link>{' '}
        and <code>fast-glob</code>'s{' '}
        <Link href="https://pkg-size.dev/fast-glob" target="_blank">
          513KB
        </Link>
        .
      </p>
      <p>
        It only has{' '}
        <Link href="https://npmgraph.js.org/?q=tinyglobby" target="_blank">
          two
        </Link>{' '}
        subdependencies while <code>globby</code> has{' '}
        <Link href="https://npmgraph.js.org/?q=globby" target="_blank">
          23
        </Link>{' '}
        and <code>fast-glob</code> has{' '}
        <Link href="https://npmgraph.js.org/?q=fast-glob" target="_blank">
          17
        </Link>
        . This makes install times noticeably faster and means less code and libraries to install and depend on.
      </p>
      <h3 id="used-by">
        Used by{' '}
        <ul style={{ '--marquee-count': projects.length } as CSSProperties}>
          {projects.map((entry, i) => (
            <li key={entry.name} style={{ '--marquee-item-index': i } as CSSProperties}>
              <Link href={`https://github.com/${entry.repo}`} target="_blank">
                {entry.name}
              </Link>
            </li>
          ))}
        </ul>
      </h3>
      <p>
        <code>tinyglobby</code> is used by many projects of the JavaScript ecosystem, leading to over 25 million weekly
        downloads. It's being developed in my spare time. Consider{' '}
        <Link href="https://github.com/sponsors/SuperchupuDev" target="_blank" rel="noreferrer">
          sponsoring
        </Link>{' '}
        if you'd like to support the development of this project and make my involvement more sustainable.
      </p>
      <div id="chart-container">
        <iframe
          id="chart"
          src="https://npm.chart.dev/embed/tinyglobby?primary=violet&gray=cool&theme=dark"
          title="npm download chart"
          width={760}
        />
      </div>
      <small>
        Have a big project that uses tinyglobby?{' '}
        <Link
          target="_blank"
          href="https://github.com/SuperchupuDev/website/blob/main/src/app/tinyglobby/projects.json"
        >
          Add it to the list
        </Link>
      </small>
    </main>
  );
}
