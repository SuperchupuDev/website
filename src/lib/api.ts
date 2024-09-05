import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { getFrontmatter } from 'next-mdx-remote-client/utils';

const postsDirectory = join(process.cwd(), 'src', 'posts');

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  content: string;
  hidden?: boolean;
};

export function getPostSlugs() {
  return readdirSync(postsDirectory);
}

export function getPostFrontmatter(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = readFileSync(fullPath, 'utf8');
  const { frontmatter, strippedSource } = getFrontmatter(fileContents);

  return { ...frontmatter, slug: realSlug, content: strippedSource } as Post;
}

export function getAllPosts(withHidden: boolean): Post[] {
  const slugs = getPostSlugs();
  return slugs
    .map(slug => getPostFrontmatter(slug))
    .filter(p => withHidden || !p.hidden)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}
