import { transformerTwoslash } from '@shikijs/twoslash';
import dedent from 'dedent';
import { type BundledLanguage, codeToHtml } from 'shiki';

import '@shikijs/twoslash/style-rich.css';

interface CodeProps {
  children: string;
  lang: BundledLanguage;
}

export async function Code(props: CodeProps) {
  const out = await codeToHtml(dedent(props.children), {
    lang: props.lang,
    theme: 'github-dark-default',
    transformers: [transformerTwoslash()]
  });

  // biome-ignore lint/security/noDangerouslySetInnerHtml: needed
  return <div dangerouslySetInnerHTML={{ __html: out }} />;
}
