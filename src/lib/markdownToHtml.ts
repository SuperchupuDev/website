import { serialize } from 'next-mdx-remote/serialize';

export default function markdownToHtml(markdown: string) {
  return serialize(markdown);
}
