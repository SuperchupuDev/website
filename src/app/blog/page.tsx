import { PostPreview } from '@/components/PostPreview';
import { getAllPosts } from '@/lib/api';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main>
      {posts.map(data => (
        <PostPreview {...data} key={data.slug} />
      ))}
    </main>
  );
}
