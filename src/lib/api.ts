import fs from 'node:fs';
import { join } from 'node:path';
import { getFrontmatter } from 'next-mdx-remote-client/utils';

const postsDirectory = join(process.cwd(), 'src', 'posts');

export type Post = {
  slug: string;
  title: string;
  date: Date;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostFrontmatter(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { frontmatter, strippedSource } = getFrontmatter(fileContents);

  return { ...frontmatter, slug: realSlug, content: strippedSource } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => getPostFrontmatter(slug))
    // sort posts by date in descending order
    .sort((a, b) => b.date.getTime() - a.date.getTime());
  return posts;
}
