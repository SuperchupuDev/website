import { type MDXComponents, MDXRemote } from 'next-mdx-remote-client/rsc';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  content: string;
};

const mdxComponents: MDXComponents = {
  a: ({ children, ref, ...props }) => (
    <Link {...props} href={props.href ?? ''}>
      {children}
    </Link>
  ),
  img: ({ ref, ...props }) => <Image {...props} src={props.src ?? ''} alt={props.alt ?? ''} width={600} height={300} />
};

export function PostBody({ content }: Props) {
  return <MDXRemote source={content} components={mdxComponents} />;
}
