import type { Post as PostData } from '@/lib/api';
import Link from 'next/link';
import { DateContainer } from './DateContainer';

export const PostPreview = ({ frontmatter, slug }: PostData) => {
  return (
    <article className="post-preview">
      <h2>
        <Link href={`/blog/${slug}`}>{frontmatter.title}</Link>
      </h2>
      <DateContainer date={frontmatter.date} />
      <p>{frontmatter.excerpt}</p>
    </article>
  );
};
