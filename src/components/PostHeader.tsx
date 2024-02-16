import CoverImage from './CoverImage';
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
      <div>
        <CoverImage title={title} src={coverImage} />
      </div>
      <div>
        <div>{date}</div>
      </div>
    </>
  );
}
