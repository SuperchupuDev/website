import Image from 'next/image';
import Link from 'next/link';

import './styles.css';

export default function Page() {
  return (
    <main id="intro">
      <h1>HI IM SUPERCHUPU</h1>
      <figure id="luigi">
        <Image src="/images/luigi.webp" title="hi im luigi" alt="luigi" width={300} height={300} />
        <figcaption>this is my dad's cat his name is luigi</figcaption>
      </figure>
      <p>welcome to my website!!!!!!!!</p>
      <p>
        hello yes im madeline. i like to code things in javascript mostly because i'm bored. i've been doing this since
        i was 13 because one day i wondered how to make a discord bot. im also spanish!!!!!! wow how interesting!!!!!!!
      </p>
      <p>
        most of my life started after joining a discord server about the letter h when i was 13. there i met some people
        online that i still talk to 6 years later for some stupid reason
      </p>
      <p>i also like doing useless things like playing geometry dash or reading homestuck</p>
      <p>
        spending too much time at my computer when i was a teenager made me start coding during pretty much all my free
        time for about 4 years, which lead me to contribute to open source projects and create a few more that
        accidentally got popular
      </p>
      <p>
        some notable ones include <Link href="/tinyglobby">tinyglobby</Link>, a very small glob library that's now one
        of the most popular ones in javascript because apparently almost no one thought of lightweight globbing before
      </p>
      <p>
        im also technically a{' '}
        <Link href="https://biomejs.dev" target="_blank">
          biome
        </Link>{' '}
        maintainer because i was an active member for a while but like its been many months since i last contributed
        anything........
      </p>
      <figure id="vespines">
        <Image
          src="/images/vespines.webp"
          title="meow (meow)"
          alt="vespín [right] and vespina [left]"
          width={300}
          height={300}
        />
        <figcaption>he also has two more</figcaption>
      </figure>
      <p>
        i really like simplicity and performance which is why in websites i like to avoid using javascript as much as
        possible. in fact you can disable it on this website and the theme picker will still work.. its implemented in
        pure css lol
      </p>
      <p>
        this also applies to javascript in general. i have spent way too much time contributing to javascript libraries
        so that they use less dependencies and are lighter in general
      </p>
      <p>
        by the way a few years ago i made the best website of all time. yup youve heard that right you can check it out at{' '}
        <Link href="https://thefunniestcatsofalltime.pages.dev/" target="_blank">
          thefunniestcatsofalltime.pages.dev
        </Link>
      </p>
      <p>
        i dont know if you can tell but i appreciate my friends a lot!!!!!!!! and get really sad if they leave suddenly
        with no trace
      </p>
      <p>
        <a href="/blog">I HAVE A BLOG</a> I DONT USE IT I HAVE BARELY ANYTHING THERE but it's there. you're welcome
      </p>
    </main>
  );
}
