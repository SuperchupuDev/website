import { getHighlighter, getTransformers } from '#lib/api.ts';

import '@shikijs/twoslash/style-rich.css';

interface CodeProps {
  children: string;
  lang: 'js' | 'ts' | 'sh';
}

const { codeToHtml } = await getHighlighter({
  langs: ['js', 'ts', 'sh'],
  themes: ['github-light-default', 'github-dark-default']
});

export function Code(props: CodeProps) {
  const out = codeToHtml(props.children, {
    lang: props.lang,
    themes: {
      light: 'github-light-default',
      dark: 'github-dark-default'
    },
    transformers: getTransformers()
  });

  // biome-ignore lint/security/noDangerouslySetInnerHtml: needed
  return <div dangerouslySetInnerHTML={{ __html: out }} />;
}
