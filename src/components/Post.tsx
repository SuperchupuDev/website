import type { Post as PostData } from '@/lib/api';
import Link from 'next/link';
import { DateContainer } from './DateContainer';

export const Post = ({ title, coverImage, date, slug, excerpt }: PostData) => {
  return (
    <article>
      <h2>
        <Link href={`./blog/${slug}`}>{title}</Link>
      </h2>
      <img src={coverImage} alt={title} />
      <DateContainer date={date} />
      <p>{excerpt}</p>
    </article>
  );
};
