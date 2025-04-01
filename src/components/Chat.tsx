'use client';

import { type RefObject, useRef, useState } from 'react';

const buttonOnClick = (value: string, ref: RefObject<HTMLVideoElement>) => {
  if (value) {
    ref.current.play();
    ref.current.style.visibility = 'visible';
  } else {
    alert('ERROR: ask something');
  }
};

export const Chat = () => {
  const [value, setValue] = useState('');
  const ref = useRef<HTMLVideoElement>(null) as RefObject<HTMLVideoElement>;
  return (
    <>
      {/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
      <video
        ref={ref}
        src="/video/foxy.mp4"
        id="foxy"
        onEnded={() => window.open('https://www.youtube.com/watch?v=tYbGdBTMZ_s', '_self')}
      />
      <h1>What can I glob with?</h1>
      <input type="text" placeholder="Ask anything" onChange={e => setValue(e.target.value)} />
      <button type="submit" onClick={() => buttonOnClick(value, ref)}>
        ⬆️
      </button>
    </>
  );
};
