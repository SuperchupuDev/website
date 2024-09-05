import { CoverImage } from './CoverImage';
import { DateContainer } from './DateContainer';
import { PostTitle } from './PostTitle';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
};

export function PostHeader({ title, coverImage, date, excerpt }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <CoverImage title={title} excerpt={excerpt} src={coverImage} />
      <DateContainer date={date} />
    </>
  );
}
