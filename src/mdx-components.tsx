import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

export const mdxComponents: MDXComponents = {
  a: ({ children, ref, ...props }) => (
    <Link {...props} href={props.href ?? ''}>
      {children}
    </Link>
  ),
  img: ({ ref, ...props }) => <Image {...props} src={props.src ?? ''} alt={props.alt ?? ''} width={600} height={300} />
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components
  };
}
