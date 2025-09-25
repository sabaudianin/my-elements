import { useState } from 'react';

export const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const toggle = () => setIsFlipped((v) => !v);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-12 bg-blue-200 p-2 [perspective:1000px]">
      <p className="text-2xl font-bold text-red-500">Click Card to find more</p>
      <article
        className="relative aspect-[3/4] w-full max-w-sm transform-gpu cursor-pointer rounded-xl text-white shadow-[0_12px_28px_rgba(0,0,0,0.35)] transition-transform duration-700 [transform-style:preserve-3d] data-[flipped=true]:[transform:rotateY(180deg)]"
        data-flipped={isFlipped}
        onClick={toggle}
        role="button"
        tabIndex={0}
        aria-pressed={isFlipped}
        aria-label={isFlipped ? 'Show front' : 'Flip card'}
      >
        <div className="absolute inset-0 overflow-hidden rounded-xl p-4 [backface-visibility:hidden]">
          <img
            src="/avatarMini.jpg"
            alt="Rafal Bobko portrait"
            className="absolute inset-0 -z-10 h-full w-full rounded-xl object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center drop-shadow">
            <h1 className="text-2xl font-bold">Rafal Bobko</h1>
            <p className="font-semibold text-green-300">Frontend Developer · React & Performance</p>

            <p className="sr-only">Developer building fast, accessible interfaces with React.</p>
          </div>
        </div>

        <div className="absolute inset-0 grid [transform:rotateY(180deg)] place-items-center rounded-xl bg-black p-6 [backface-visibility:hidden]">
          <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold">Rafal Bobko</h2>
            <p className="text-white/85">
              Modern developer focused on React, performance and DX. Passionate about clean UI and
              accessible motion.
            </p>
            <a
              href="/about"
              className="inline-flex items-center rounded-xl bg-green-500 px-4 py-2 font-medium hover:bg-green-600 focus-visible:ring-4 focus-visible:ring-green-500/30 focus-visible:outline-none active:translate-y-px"
              onClick={(e) => e.stopPropagation()}
            >
              Find more
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};
