import type { Post as PostData } from '@/lib/api';
import Link from 'next/link';
import { DateContainer } from './DateContainer';

export const PostPreview = ({ title, date, slug, excerpt }: PostData) => {
  return (
    <article className="post-preview">
      <h2>
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h2>
      <DateContainer date={date} />
      <p>{excerpt}</p>
    </article>
  );
};
