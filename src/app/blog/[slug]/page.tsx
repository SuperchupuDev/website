import { PostBody } from '@/components/PostBody';
import { PostHeader } from '@/components/PostHeader';
import { getAllPosts, getPostFrontmatter } from '@/lib/api';
import type { Metadata } from 'next';

import './styles.css';

export function generateStaticParams() {
  const posts = getAllPosts(true);

  return posts.map(post => ({
    slug: post.slug
  }));
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostFrontmatter(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [post.coverImage]
    }
  };
}

export default async function PostPage(props: Params) {
  const { slug } = await props.params;
  const post = getPostFrontmatter(slug);

  return (
    <main>
      <article id="blog-post">
        <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} excerpt={post.excerpt} />
        <PostBody content={post.content} />
      </article>
    </main>
  );
}
