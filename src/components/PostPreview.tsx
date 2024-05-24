import type { Post as PostData } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import { DateContainer } from './DateContainer';

export const PostPreview = ({ title, coverImage, date, slug, excerpt }: PostData) => {
  return (
    <article>
      <h2>
        <Link href={`./blog/${slug}`}>{title}</Link>
      </h2>
      <Image src={coverImage} alt={title} width={800} height={400} />
      <DateContainer date={date} />
      <p>{excerpt}</p>
    </article>
  );
};
