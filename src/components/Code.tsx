import dedent from 'dedent';
import { type BundledLanguage, codeToHtml } from 'shiki';

interface CodeProps {
  children: string;
  lang?: BundledLanguage;
}

export async function Code(props: CodeProps) {
  const out = await codeToHtml(dedent(props.children), {
    lang: props.lang ?? 'javascript',
    theme: 'github-dark'
  });

  // biome-ignore lint/security/noDangerouslySetInnerHtml: needed
  return <div dangerouslySetInnerHTML={{ __html: out }} />;
}
