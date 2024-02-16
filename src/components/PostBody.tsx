'use client';
import { mdxComponents } from '@/mdx-components';
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';

type Props = {
  content: MDXRemoteSerializeResult;
};

export function PostBody({ content }: Props) {
  return <MDXRemote components={mdxComponents} {...content} />;
}
