import { useState } from 'react';

export const FlipCard = () => {
  const [isFliped, setIsFliped] = useState(false);
  const toggleFlip = () => setIsFliped((prev) => !prev);
  return (
    <section className="grid min-h-screen place-items-center bg-blue-200 p-2 [perspective:1000px]">
      <span className="text-xl font-bold">Click Card to find More</span>
      <article
        className="relative aspect-[3/4] w-full max-w-sm transform-gpu cursor-pointer rounded-xl font-semibold text-black text-white shadow-[9px_18px_9px_0px_rgba(0,_0,_0,_0.35)] transition-transform duration-700 [transform-style:preserve-3d] data-[flipped=true]:[transform:rotateY(180deg)]"
        data-flipped={isFliped}
        onClick={toggleFlip}
        role="button"
      >
        {/* FRONT */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-[url('/avatarMini.jpg')] bg-cover bg-center p-4 [backface-visibility:hidden]">
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center drop-shadow">
            <h2 className="text-2xl font-bold">Rafal Bobko</h2>
            <p className="font-bold text-green-300">1k followers on Github</p>
          </div>
        </div>
        {/* BACK */}
        <div className="absolute inset-0 grid h-full w-full [transform:rotateY(180deg)] place-items-center rounded-xl bg-black p-6 [backface-visibility:hidden]">
          <div className="space-y-12 text-center">
            <h3 className="py-2 text-2xl font-bold">Rafal Bobko</h3>
            <p className="text-center">
              Rafal Bobko is a high class modern Developer, focused on React, performance and DX.
              Get him services ASAP.
            </p>
            <button
              className="inline-flex cursor-pointer items-center rounded-xl bg-green-500 px-4 py-2 hover:bg-green-600 focus-visible:ring-4 focus-visible:ring-green-500/30 focus-visible:outline-none active:translate-y-px"
              onClick={(e) => console.log('CLicked button find More', e.stopPropagation())}
            >
              Find More
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};
