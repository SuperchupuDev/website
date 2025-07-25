import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { transformerTwoslash } from '@shikijs/twoslash';
import { compileMDX } from 'next-mdx-remote/rsc';
import {
  type BundledHighlighterOptions,
  type BundledLanguage,
  type BundledTheme,
  createHighlighter,
  type ShikiTransformer
} from 'shiki';

export type PostContent = Awaited<ReturnType<typeof compileMDX>>['content'];
export type MDXComponents = Parameters<typeof compileMDX>[0]['components'];

export interface Post {
  content: PostContent;
  frontmatter: {
    title: string;
    date: string;
    coverImage: string;
    excerpt: string;
    content: string;
    hidden?: boolean;
  };
  slug: string;
}

const postsDirectory = join(process.cwd(), 'src', 'posts');

export function getPostSlugs() {
  return readdir(postsDirectory);
}

export function getMDXFile(slug: string) {
  const path = join(postsDirectory, `${slug}.mdx`);
  return readFile(path, 'utf8');
}

export async function getPost(slug: string, components?: MDXComponents) {
  const source = await getMDXFile(slug);
  const result = (await compileMDX({ source, components, options: { parseFrontmatter: true } })) as Omit<Post, 'slug'>;
  return { ...result, slug };
}

export async function getAllPosts(withHidden: boolean): Promise<Post[]> {
  const posts: Post[] = [];
  for (const slug of await getPostSlugs()) {
    const post = await getPost(slug.slice(0, slug.length - 4));
    if (withHidden || !post.frontmatter.hidden) {
      posts.push(post);
    }
  }
  return posts.sort((a, b) => (a.frontmatter.date > b.frontmatter.date ? -1 : 1));
}

let highlighter: Awaited<ReturnType<typeof import('shiki').createHighlighter>>;
export async function getHighlighter<L extends BundledLanguage, T extends BundledTheme>(
  options: BundledHighlighterOptions<L, T>
) {
  if (!highlighter) {
    highlighter = await createHighlighter(options);
  }
  return highlighter;
}

let transformers: ShikiTransformer[];
export function getTransformers() {
  if (!transformers) {
    transformers = [transformerTwoslash({ explicitTrigger: true })];
  }
  return transformers;
}
