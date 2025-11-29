// 'use client';
// import Image from 'next/image';
import { PolaroidCard } from '../Card/Polaroid/PolaroidCard';

const SLIDES = [
  { src: '/images.jpg', alt: '' },
  { src: '/images2.jpg', alt: '' },
];

export const MiniGallerySwipe = () => {
  return (
    <section aria-labelledby="mini-gallery-heading" role="region">
      <h2
        id="mini-gallery-heading"
        className="mb-2 text-center text-base tracking-wide text-[var(--c-primary)] md:text-xl"
      >
        Mini Galeria Polaroid:
      </h2>

      {/* Opisy dla czytników ekranu */}
      <ul className="sr-only">
        {SLIDES.map((card, index) => (
          <li key={index}>{card.alt}</li>
        ))}
      </ul>

      <div className="flex justify-center gap-2 py-4 md:gap-4">
        <div
          className="scrollbar-thin scrollbar-thumb-amber-500/60 scrollbar-track-transparent relative mx-auto flex max-w-6xl touch-pan-x snap-x snap-mandatory items-stretch overflow-x-auto overflow-y-hidden"
          aria-hidden="true"
        >
          {/* Gradient po lewej */}
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-16 bg-gradient-to-r from-amber-500/20 to-transparent" />
          {/* Gradient po prawej */}
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-16 bg-gradient-to-l from-amber-500/20 to-transparent" />

          <div className="flex pr-10 pl-10">
            {SLIDES.map((card, index) => (
              <PolaroidCard key={index} alt={card.alt} src={card.src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
