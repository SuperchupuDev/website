import { PostPreview } from '@/components/PostPreview';
import { getAllPosts } from '@/lib/api';
import type { Metadata } from 'next';

import './styles.css';

export const metadata: Metadata = {
  title: 'blog',
  description: 'yes i have a blog isnt that awesome'
};

export default async function Blog() {
  const posts = await getAllPosts(false);

  return (
    <div id="blog-container">
      <h1>blog</h1>
      {posts.map(data => (
        <PostPreview {...data} key={data.slug} />
      ))}
    </div>
  );
}
