import { PostHeader } from '@/components/PostHeader';
import { type MDXComponents, getAllPosts, getPost } from '@/lib/api';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import './styles.css';

export async function generateStaticParams() {
  const posts = await getAllPosts(true);

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
  const { frontmatter } = await getPost(params.slug);

  return {
    title: frontmatter.title,
    description: frontmatter.excerpt,
    openGraph: {
      images: [frontmatter.coverImage]
    }
  };
}

const components = {
  a: ({ children, ref, ...props }) => (
    <Link {...props} href={props.href ?? ''} target={props.href?.startsWith('/') ? '_self' : '_blank'}>
      {children}
    </Link>
  ),
  img: ({ ref, ...props }) => {
    const height = Number(props.src?.split('#')[1] ?? 0);
    return <Image {...props} src={props.src?.split('#')[0] ?? ''} alt={props.alt ?? ''} width={600} height={height} />;
  }
} satisfies MDXComponents;

export default async function PostPage(props: Params) {
  const { slug } = await props.params;
  const { frontmatter, content } = await getPost(slug, components);

  return (
    <main>
      <article id="blog-post">
        <PostHeader
          title={frontmatter.title}
          coverImage={frontmatter.coverImage}
          date={frontmatter.date}
          excerpt={frontmatter.excerpt}
        />
        {content}
      </article>
    </main>
  );
}
