import dedent from 'dedent';
import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { convertPathToPattern, type GlobOptions } from 'tinyglobby';
import { version } from 'tinyglobby/package.json' with { type: 'json' };
import { Code } from '#components/Code.tsx';

import '../styles.css';

export const metadata: Metadata = {
  title: 'documentation'
};

export default function Page() {
  return (
    <main>
      <h1>
        tinyglobby documentation <sub>v{version}</sub>
      </h1>
      <h2 id="api">API</h2>
      <APIEntry name="glob">
        Asynchronously match files following a glob pattern.
        <br />
        <br />
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
        Synchronously match files following a glob pattern.
        <br />
        <br />
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
        Converts a path to a pattern depending on the platform. Identical to{' '}
        <Link href="#escapePath">
          <code>escapePath</code>
        </Link>{' '}
        on POSIX systems.
        <br />
        <br />
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
        Escapes a path's special characters depending on the platform.
        <br />
        <br />
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
      <APIEntry name="isDynamicPattern">
        <br />
        <br />
        <br />
        <br />
        <br />
        Checks if a pattern has dynamic parts.
        <br />
        <br />
        Has a few minor differences with{' '}
        <Link target="_blank" href="https://github.com/mrmlnc/fast-glob">
          <code>fast-glob</code>
        </Link>{' '}
        for better accuracy:
        <br />
        <ul>
          <li>
            Doesn't necessarily return false on patterns that include <code>\</code>.
          </li>
          <li>
            Returns <code>true</code> if the pattern includes parentheses, regardless of them representing one single
            pattern or not.
          </li>
          <li>
            Returns <code>true</code> for unfinished glob extensions i.e. <code>(h</code>, <code>+(h</code>.
          </li>
          <li>
            Returns<code>true</code> for unfinished brace expansions as long as they include <code>,</code> or{' '}
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
        Whether to return absolute paths. Disable to have relative paths.
      </APIOption>
      <hr />
      <APIOption name="caseSensitiveMatch" default="true">
        Whether to match in case-sensitive mode.
      </APIOption>
      <hr />
      <APIOption name="cwd" default="process.cwd()">
        The working directory in which to search. Results will be returned relative to this directory, unless{' '}
        <Link href="#absolute">
          <code>absolute</code>
        </Link>{' '}
        is set.
        <br />
        <br />
        It is very important to avoid globbing outside this directory when possible, even with absolute paths enabled,
        as doing so can harm performance due to having to recalculate relative paths.
        <Code lang="ts">
          {dedent`
            declare const searchDir: string;
            // ---cut---
            import { glob } from 'tinyglobby';

            // Avoid this - will calculate it relative to \`process.cwd()\`!:
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
        Logs useful debug information. Meant for development purposes. Logs can change at any time.
      </APIOption>
      <hr />
      <APIOption name="deep" default="Infinity">
        Maximum directory depth to crawl.
      </APIOption>
      <hr />
      <APIOption name="dot" default="false">
        Whether to return entries that start with a dot, like <code>.gitignore</code> or <code>.prettierrc</code>.
      </APIOption>
      <hr />
      <APIOption name="expandDirectories" default="true">
        Whether to automatically expand directory patterns. Important to disable if migrating from{' '}
        <Link target="_blank" href="https://github.com/mrmlnc/fast-glob">
          <code>fast-glob</code>.
        </Link>
      </APIOption>
      <hr />
      <APIOption name="followSymbolicLinks" default="true">
        Whether to traverse and include symbolic links. Can slightly affect performance.
      </APIOption>
      <hr />
      <APIOption name="ignore" default="[]">
        Glob patterns to exclude from the results.
      </APIOption>
      <hr />
      <APIOption name="onlyDirectories" default="false">
        Enable to only return directories. If <code>true</code>, disables{' '}
        <Link href="#onlyFiles">
          <code>onlyFiles</code>
        </Link>
        .
      </APIOption>
      <hr />
      <APIOption name="onlyFiles" default="true">
        Enable to only return files.
      </APIOption>
    </main>
  );
}

interface APIEntryProps {
  name: keyof typeof import('tinyglobby');
  children?: ReactNode;
}
function APIEntry(props: APIEntryProps) {
  return (
    <div className="entry">
      <h3 id={props.name}>
        <Code meta="twoslash no-jsdoc" lang="ts">
          {dedent`
            import { ${props.name} } from 'tinyglobby';
            // ---cut---
            ${props.name}
            // ^?
          `}
        </Code>
      </h3>
      <br />
      {props.children}
    </div>
  );
}

interface APIOptionProps {
  name: keyof GlobOptions;
  children?: ReactNode;
  default: string;
}

function APIOption(props: APIOptionProps) {
  return (
    <div className="option">
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
      <br />
      {props.children}
      <br />
      <strong>Default:</strong> <code>{props.default}</code>
      <br />
    </div>
  );
}
