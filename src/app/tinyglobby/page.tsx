import dedent from 'dedent';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { Code } from '#components/Code.tsx';
import projects from './projects.json' with { type: 'json' };

import './styles.css';

export default function Page() {
  return (
    <main>
      <h1>
        tinyglobby (
        <Link target="_blank" href={'https://github.com/SuperchupuDev/tinyglobby'}>
          source
        </Link>
        ,{' '}
        <Link target="_blank" href={'https://npmjs.com/tinyglobby'}>
          npm
        </Link>
        )
      </h1>
      <h2>A fast and minimal alternative to globby and fast-glob</h2>
      <Code lang="ts">
        {dedent`
          import { glob, globSync } from 'tinyglobby';

          await glob(['files/*.ts', '!**/*.d.ts'], { cwd: 'src' });
          globSync('src/**/*.ts', { ignore: '**/*.d.ts' });
        `}
      </Code>
      <h3>
        <Link href="/tinyglobby/documentation">Documentation</Link>
      </h3>
      <h3 id="used-by">
        Used by{' '}
        <div id="used-by-entries" style={{ '--marquee-count': projects.length } as CSSProperties}>
          {projects.map((entry, i) => (
            <Link
              style={{ '--marquee-item-index': i } as CSSProperties}
              key={entry.name}
              target="_blank"
              href={`https://github.com/${entry.repo}`}
            >
              {entry.name}
            </Link>
          ))}
        </div>
      </h3>
      <iframe
        id="chart"
        src="https://npm.chart.dev/embed/tinyglobby?primary=violet&gray=cool&theme=dark"
        title="npm download chart"
      />
      <sup>
        Have a big project that uses tinyglobby?{' '}
        <Link
          target="_blank"
          href="https://github.com/SuperchupuDev/website/blob/main/src/app/tinyglobby/projects.json"
        >
          Add it to the list
        </Link>
      </sup>
    </main>
  );
}
