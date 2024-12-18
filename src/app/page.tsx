import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1>superchupu's (work in progress) tiny website</h1>
      <h2>hiiiiiiiii im madeline i love coding :3</h2>
      am a cat who just happens to like do stuff. i also play geometry dash
      <br />
      heres some stuff i code
      <br />
      <Link href="https://github.com/SuperchupuDev/tinyglobby" target="_blank">
        tinyglobby
      </Link>
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
      <h3>this is me</h3>
      picture of superchupu
      <h3>this is my dad's cat</h3>
      picture of luigi
      <h3>actually he adopted two more</h3>
      picture of vespín and vespina
      <h4>
        did you know? i have a blog. if i ever decide to write something there you can check it out{' '}
        <Link href="/blog">here</Link>
      </h4>
    </>
  );
}
