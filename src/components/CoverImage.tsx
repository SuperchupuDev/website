import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  src: string;
  slug?: string;
};

export const CoverImage = ({ title, src, slug }: Props) => (
  <>
    {slug ? (
      <Link href={`/blog/${slug}`} aria-label={title}>
        <Image src={src} alt={`Cover Image for ${title}`} width={800} height={400} />
      </Link>
    ) : (
      <Image src={src} alt={`Cover Image for ${title}`} width={1300} height={500} priority />
    )}
  </>
);
