import type { Post as PostData } from '@/lib/api';
import Link from 'next/link';
import { CoverImage } from './CoverImage';
import { DateContainer } from './DateContainer';

export const PostPreview = ({ title, coverImage, date, slug, excerpt }: PostData) => {
  return (
    <article>
      <h2>
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h2>
      <CoverImage title={title} src={coverImage} slug={slug} />
      <DateContainer date={date} />
      <p>{excerpt}</p>
    </article>
  );
};
