import Image from 'next/image';

type Props = {
  title: string;
  src: string;
  excerpt: string;
};

export const CoverImage = ({ title, src, excerpt }: Props) => (
  <Image
    id="blog-cover"
    src={src}
    title={excerpt}
    alt={`Cover Image for ${title}`}
    width={1000}
    height={500}
    priority
  />
);
