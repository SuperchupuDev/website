import { type MDXComponents, MDXRemote } from 'next-mdx-remote-client/rsc';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  content: string;
};

const mdxComponents: MDXComponents = {
  a: ({ children, ref, ...props }) => (
    <Link {...props} href={props.href ?? ''} target={props.href?.startsWith('/') ? 'self' : '_blank'}>
      {children}
    </Link>
  ),
  img: ({ ref, ...props }) => {
    const height = Number(props.src?.split('#')[1] ?? 0);
    return <Image {...props} src={props.src?.split('#')[0] ?? ''} alt={props.alt ?? ''} width={600} height={height} />;
  }
};

export function PostBody({ content }: Props) {
  return <MDXRemote source={content} components={mdxComponents} />;
}
