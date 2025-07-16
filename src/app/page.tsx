import Link from 'next/link';
import { Cats } from '#components/Cats.tsx';

import './styles.css';

export default function Page() {
  return (
    <>
      <h1>superchupu's (work in progress) tiny website</h1>
      <h2>
        hiiiiiiiii im madeline{' '}
        <sup className="pronouns" title="waow">
          she/it
        </sup>{' '}
        i love coding :3
      </h2>
      am a spanish cat who for some reason likes to code in javascript. i like to contribute to open source projects in
      my free time.
      <br />
      heres some stuff i code
      <br />
      <br />
      <Link href="/tinyglobby">tinyglobby</Link>
      <br />
      <Link href="https://thefunniestcatsofalltime.pages.dev" target="_blank">
        thefunniestcatsofalltime.pages.dev
      </Link>
      <br />
      <Link href="https://biomejs.dev" target="_blank">
        biome
      </Link>{' '}
      (although i haven't contributed much and ive been kinda inactive :P i really need to properly learn rust sowy)
      <br />
      <br />
      <Cats />
      <h4>
        did you know? i have a blog. if i ever decide to write something there you can check it out{' '}
        <Link href="/blog">here</Link>
      </h4>
    </>
  );
}
