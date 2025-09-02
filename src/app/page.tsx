import Link from 'next/link';
import { Cats } from '#components/Cats.tsx';

import './styles.css';

export default function Page() {
  return (
    <>
      <h1>superchupu's (work in progress) tiny website</h1>
      <h2>
        hiiiiiiiii im madeline{' '}
        <small className="sup pronouns" title="yup">
          she/it
        </small>{' '}
        i love coding :3
      </h2>
      <p>
        am a spanish cat who for some reason likes to code in javascript. i like to contribute to open source projects
        in my free time.
      </p>
      <p>heres some stuff i code</p>
      <ul id="projects">
        <li>
          <Link href="/tinyglobby">tinyglobby</Link>
        </li>
        <li>
          <Link href="https://thefunniestcatsofalltime.pages.dev" target="_blank">
            thefunniestcatsofalltime.pages.dev
          </Link>
        </li>
        <li>
          <Link href="https://biomejs.dev" target="_blank">
            biome
          </Link>{' '}
          (although i haven't contributed much and ive been kinda inactive :P i really need to properly learn rust sowy)
        </li>
      </ul>
      <Cats />
      <h4>
        did you know? i have a blog. if i ever decide to write something there you can check it out{' '}
        <Link href="/blog">here</Link>
      </h4>
    </>
  );
}
