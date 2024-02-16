import { CoverImage } from './CoverImage';
import { DateContainer } from './DateContainer';
import { PostTitle } from './PostTitle';

type Props = {
  title: string;
  coverImage: string;
  date: Date;
};

export function PostHeader({ title, coverImage, date }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div>
        <CoverImage title={title} src={coverImage} />
      </div>
      <div>
        <DateContainer date={date} />
      </div>
    </>
  );
}
