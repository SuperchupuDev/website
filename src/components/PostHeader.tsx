import { CoverImage } from './CoverImage';
import { DateContainer } from './DateContainer';
import { PostTitle } from './PostTitle';

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

export function PostHeader({ title, coverImage, date }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <CoverImage title={title} src={coverImage} />
      <DateContainer date={date} />
    </>
  );
}
