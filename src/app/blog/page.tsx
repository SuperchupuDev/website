import { Post } from '@/components/Post';
import { getAllPosts } from '@/lib/api';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main>
      {posts.map((data, index) => (
        <Post {...data} key={index} />
      ))}
    </main>
  );
}
