import Link from 'next/link';
import type { Post as PostData } from '#lib/api.ts';
import { DateContainer } from './DateContainer.tsx';

export const PostPreview = ({ frontmatter, slug }: PostData) => {
  return (
    <article className="post-preview">
      <h2>
        <Link href={`/blog/${slug}`}>{frontmatter.title}</Link>
      </h2>
      <p>
        <DateContainer date={frontmatter.date} />
        {frontmatter.tags && (
          <>
            {' | '}
            Tags:{' '}
            {frontmatter.tags.map(t => (
              <code key={t}>{t}</code>
            ))}
          </>
        )}
      </p>
      <p>{frontmatter.excerpt}</p>
    </article>
  );
};
