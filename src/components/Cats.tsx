'use client';

import Image from 'next/image';

export const Cats = () => (
  <>
    <h3>this is me</h3>
    <div className="marquee">
      <Image
        className="cat marquee-left"
        src="/images/meee.png"
        alt="me"
        width={400}
        height={400}
        onClick={() => {
          alert('that me!! hiiii :3');
        }}
      />
    </div>
    <h3>this is my dad's cat</h3>
    <div className="marquee">
      <Image
        className="cat marquee-bounce"
        src="/images/luigi.png"
        alt="luigi"
        width={400}
        height={400}
        onClick={() => {
          alert('hi im luigi');
        }}
      />
    </div>
    <h3>actually he adopted two more</h3>
    <div className="marquee">
      <Image
        className="cat marquee-up"
        src="/images/vespines.png"
        alt="vespín [right] and vespina [left]"
        width={400}
        height={400}
        onClick={() => {
          alert('meow (meow)');
        }}
      />
    </div>
  </>
);
