import Image from 'next/image';

type Props = {
  title: string;
  src: string;
};

export const CoverImage = ({ title, src }: Props) => (
  <Image src={src} alt={`Cover Image for ${title}`} width={1000} height={500} priority />
);
