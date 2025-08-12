import dedent from 'dedent';
import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { convertPathToPattern, type GlobOptions } from 'tinyglobby';
import pkg from 'tinyglobby/package.json' with { type: 'json' };
import { Code } from '#components/Code.tsx';

import '../styles.css';

export const metadata: Metadata = {
  title: 'documentation'
};

export default function Page() {
  return (
    <main>
      <h1>
        tinyglobby documentation <small className="sub">v{pkg.version}</small>
      </h1>
      <h2 id="api">API</h2>
      <APIEntry name="glob">
        <p>Asynchronously match files following a glob pattern.</p>
        <strong>Usage:</strong>
        <Code lang="ts">
          {dedent`
            import { glob } from 'tinyglobby';

            const files = await glob('src/**', {
              cwd: './projects/best-cats'
            });
          `}
        </Code>
      </APIEntry>
      <hr />
      <APIEntry name="globSync">
        <p>Synchronously match files following a glob pattern.</p>
        <strong>Usage:</strong>
        <Code lang="ts">
          {dedent`
            import { globSync } from 'tinyglobby';

            const files = await globSync('src/**', {
              cwd: './projects/best-cats'
            });
          `}
        </Code>
      </APIEntry>
      <hr />
      <APIEntry name="convertPathToPattern">
        <p>
          Converts a path to a pattern depending on the platform. Identical to{' '}
          <Link href="#escapePath">
            <code>escapePath</code>
          </Link>{' '}
          on POSIX systems.
        </p>
        <strong>Usage:</strong>
        <Code lang="ts">
          {dedent`
            import { convertPathToPattern } from 'tinyglobby';

            convertPathToPattern("[413] home stuck funny moments*.mp4");
            // Returns "${convertPathToPattern('[413] home stuck funny moments*.mp4')}"
          `}
        </Code>
      </APIEntry>
      <hr />
      <APIEntry name="escapePath">
        <p>Escapes a path's special characters depending on the platform.</p>
        <strong>Usage:</strong>
        <Code lang="ts">
          {dedent`
            import { escapePath } from 'tinyglobby';

            escapePath("!!()!()i use linux and i can use \\ in filenames!!()!");
            // Returns "${convertPathToPattern('!!()!()i use linux and i can use \\ in filenames!!()!')}"
          `}
        </Code>
      </APIEntry>
      <hr />
      <APIEntry marginBottom={'7.2em'} name="isDynamicPattern">
        <p>Checks if a pattern has dynamic parts.</p>
        <p>
          Has a few minor differences with{' '}
          <Link target="_blank" href="https://github.com/mrmlnc/fast-glob">
            <code>fast-glob</code>
          </Link>{' '}
          for better accuracy:
        </p>
        <ul>
          <li>
            Doesn't necessarily return <code>false</code> on patterns that include <code>\</code>.
          </li>
          <li>
            Returns <code>true</code> if the pattern includes parentheses, regardless of them representing one single
            pattern or not.
          </li>
          <li>
            Returns <code>true</code> for unfinished glob extensions i.e. <code>(h</code>, <code>+(h</code>.
          </li>
          <li>
            Returns <code>true</code> for unfinished brace expansions as long as they include <code>,</code> or{' '}
            <code>..</code>.
          </li>
        </ul>
        <strong>Usage:</strong>
        <Code lang="ts">
          {dedent`
            import { convertPathToPattern } from 'tinyglobby';

            convertPathToPattern("[413] home stuck funny moments*.mp4");
            // Returns "${convertPathToPattern('[413] home stuck funny moments*.mp4')}"
          `}
        </Code>
      </APIEntry>
      <h2 id="options">Options</h2>
      <Code lang="ts">{"import type { GlobOptions } from 'tinyglobby';"}</Code>
      <APIOption name="absolute" default="false">
        <p>Whether to return absolute paths. Disable to have relative paths.</p>
      </APIOption>
      <hr />
      <APIOption name="caseSensitiveMatch" default="true">
        <p>Whether to match in case-sensitive mode.</p>
      </APIOption>
      <hr />
      <APIOption name="cwd" default="process.cwd()">
        <p>
          The working directory in which to search. Results will be returned relative to this directory, unless{' '}
          <Link href="#absolute">
            <code>absolute</code>
          </Link>{' '}
          is set.
        </p>
        <p>
          It is important to avoid globbing outside this directory when possible, even with absolute paths enabled, as
          doing so can harm performance due to having to recalculate relative paths.
        </p>
        <Code lang="ts">
          {dedent`
            import { glob } from 'tinyglobby';

            // Avoid this - will calculate it relative to \`process.cwd()\`!
            await glob(\`\${searchDir}/*.ts\`, {
              absolute: true
            });

            // Do this instead:
            await glob(\`\${searchDir}/*.ts\`, {
              absolute: true,
              cwd: searchDir
            });

          `}
        </Code>
      </APIOption>
      <hr />
      <APIOption name="debug" default="false">
        <p>Logs useful debug information. Meant for development purposes. Logs can change at any time.</p>
      </APIOption>
      <hr />
      <APIOption name="deep" default="Infinity">
        <p>Maximum directory depth to crawl.</p>
      </APIOption>
      <hr />
      <APIOption name="dot" default="false">
        <p>
          Whether to return entries that start with a dot, like <code>.gitignore</code> or <code>.prettierrc</code>.
        </p>
      </APIOption>
      <hr />
      <APIOption name="expandDirectories" default="true">
        <p>
          Whether to automatically expand directory patterns. Important to disable if migrating from{' '}
          <Link target="_blank" href="https://github.com/mrmlnc/fast-glob">
            <code>fast-glob</code>.
          </Link>
        </p>
      </APIOption>
      <hr />
      <APIOption name="followSymbolicLinks" default="true">
        <p>Whether to traverse and include symbolic links. Can slightly affect performance.</p>
      </APIOption>
      <hr />
      <APIOption name="globstar" default="true">
        <p>
          Enables support for matching nested directories with globstars (<code>**</code>). If <code>false</code>,{' '}
          <code>**</code> behaves exactly like <code>*</code>.
        </p>
      </APIOption>
      <hr />
      <APIOption name="ignore" default="[]">
        <p>Glob patterns to exclude from the results.</p>
      </APIOption>
      <hr />
      <APIOption name="onlyDirectories" default="false">
        <p>
          Enable to only return directories. If <code>true</code>, disables{' '}
          <Link href="#onlyFiles">
            <code>onlyFiles</code>
          </Link>
          .
        </p>
      </APIOption>
      <hr />
      <APIOption name="onlyFiles" default="true">
        <p>Enable to only return files.</p>
      </APIOption>
      <hr />
      <APIOption name="signal" default="undefined">
        <p>
          An <code>AbortSignal</code> to abort crawling the file system.
        </p>
        <Code lang="ts">
          {dedent`
            import { glob } from 'tinyglobby';

            // Stops crawling if taking too long
            await glob('**', {
              signal: AbortSignal.timeout(1000)
            });
          `}
        </Code>
      </APIOption>
    </main>
  );
}

interface APIEntryProps {
  name: keyof typeof import('tinyglobby');
  marginBottom?: string | number;
  children?: ReactNode;
}
function APIEntry(props: APIEntryProps) {
  return (
    <section className="entry">
      <h3 id={props.name} style={props.marginBottom ? { marginBottom: props.marginBottom } : undefined}>
        <Code meta="twoslash no-jsdoc" lang="ts">
          {dedent`
            import { ${props.name} } from 'tinyglobby';
            // ---cut---
            ${props.name}
            // ^?
          `}
        </Code>
      </h3>
      {props.children}
    </section>
  );
}

interface APIOptionProps {
  name: keyof GlobOptions;
  children?: ReactNode;
  default: string;
}

function APIOption(props: APIOptionProps) {
  return (
    <section className="entry">
      <h3 id={props.name}>
        <Code meta="twoslash no-jsdoc" lang="ts">
          {dedent`
            import type { GlobOptions } from 'tinyglobby';
            declare const ${props.name}: GlobOptions['${props.name}'];
            // ---cut---
            ${props.name}
            // ^?
          `}
        </Code>
      </h3>
      {props.children}
      <strong>Default:</strong> <code>{props.default}</code>
    </section>
  );
}
