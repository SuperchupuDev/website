import { getHighlighter, getTransformers } from '#lib/api.ts';

// i dont like importing from node_modules either
// but not doing so produces a nextjs warning
// o.o
import '../../node_modules/@shikijs/twoslash/style-rich.css';

interface CodeProps {
  children: string;
  meta?: string;
  lang: 'js' | 'ts' | 'sh';
}

const { codeToHtml } = await getHighlighter({
  langs: ['js', 'ts', 'sh'],
  themes: ['github-light-default', 'github-dark-default']
});

export function Code(props: CodeProps) {
  let out = codeToHtml(props.children, {
    lang: props.lang,
    meta: { __raw: props.meta },
    themes: {
      light: 'github-light-default',
      dark: 'github-dark-default'
    },
    transformers: getTransformers()
  });

  if (props.meta?.split(' ').includes('no-jsdoc')) {
    out = out.replace('<pre class="', '<pre class="no-jsdoc ');
  }

  // biome-ignore lint/security/noDangerouslySetInnerHtml: needed
  return <div dangerouslySetInnerHTML={{ __html: out }} />;
}
