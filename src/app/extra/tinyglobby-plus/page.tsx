import type { Metadata } from 'next';
import Link from 'next/link';
import { Chat } from '#components/Chat.tsx';

import './styles.css';

export const metadata: Metadata = {
  title: 'tinyglobby plus TECH DEMO',
  description: 'the latest technology now in tinyglobby'
};

export default function ChatReal() {
  return (
    <>
      <Chat />
      <br />
      <Link href="/blog/tinyglobby-plus">See the announcement blog post</Link>
    </>
  );
}
