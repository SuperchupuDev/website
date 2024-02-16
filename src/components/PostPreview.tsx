import Link from 'next/link';
import CoverImage from './CoverImage';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({ title, coverImage, date, excerpt, slug }: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/blog/${slug}`} href="/posts/[slug]" className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">{date}</div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
