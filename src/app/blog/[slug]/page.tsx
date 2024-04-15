import { PostBody } from '@/components/PostBody';
import { PostHeader } from '@/components/PostHeader';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import type { Metadata } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { notFound } from 'next/navigation';

// Return a list of `params` to populate the [slug] dynamic segment
export function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map(post => ({
    slug: post.slug
  }));
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | superchupu`;

  return {
    openGraph: {
      title,
      description: post.excerpt,
      images: [post.ogImage.url]
    }
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const content = await serialize(post.content);

  return (
    <main>
      <article>
        <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} />
        <PostBody content={content} />
      </article>
    </main>
  );
}
