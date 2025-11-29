// 'use client';
// import Image from 'next/image';

const SLIDES = [
  { src: '/images.jpg', alt: '' },
  { src: '/images2.jpg', alt: '' },
];

const PolaroidCard = ({ alt, src }: { alt: string; src: string }) => (
  <div className="group mx-4 w-56 flex-shrink-0 snap-center">
    <div className="relative h-[12rem] -rotate-2 transform rounded-sm border border-neutral-300 bg-[#fdf7e5] p-3 pb-8 shadow-lg shadow-black/40 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-95 group-hover:rotate-1">
      <div className="relative h-full overflow-hidden bg-neutral-900/70">
        <img
          src={src}
          //   fill
          sizes="auto"
          alt={alt}
          className="object-cover brightness-90 contrast-125 sepia transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center px-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-center text-lg font-semibold text-white drop-shadow">{alt}</p>
        </div>
      </div>
      <p className="font-special mt-2 text-center text-xs font-semibold tracking-[0.2em] text-neutral-700 uppercase">
        {alt}
      </p>
    </div>
  </div>
);

export const MiniGallerySwipe = () => {
  return (
    <section aria-labelledby="mini-gallery-heading" role="region">
      <h2
        id="mini-gallery-heading"
        className="font-ultra mb-2 text-center text-base tracking-wide text-[var(--c-primary)] md:text-xl"
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
