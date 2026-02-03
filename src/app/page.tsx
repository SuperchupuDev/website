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
      <p>
        ive also{' '}
        <Link href="https://superchupu.itch.io/" target="_blank">
          made some games
        </Link>{' '}
        with friends in 48 hours each at{' '}
        <Link href="https://malagajam.com/" target="_blank">
          málagajam
        </Link>
        , a game jam. they are all in spanish but theyre still games
      </p>
      <ul id="projects">
        <li>
          <Link href="https://superchupu.itch.io/cascade" target="_blank">
            Cascade
          </Link>{' '}
          (2026)
        </li>
        <li>
          <Link href="https://superchupu.itch.io/fishtwt" target="_blank">
            fishtwt
          </Link>{' '}
          (2025)
        </li>
        <li>
          <Link href="https://superchupu.itch.io/eden" target="_blank">
            Edén
          </Link>{' '}
          (2024)
        </li>
      </ul>
      <Cats />
      <h4>
        <Link href="/blog">did you know? i have a blog.</Link> you can check it out if i ever decide to write something
      </h4>
    </>
  );
}
