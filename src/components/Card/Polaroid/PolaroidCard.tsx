export const PolaroidCard = ({ alt, src }: { alt: string; src: string }) => (
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
      <p className="mt-2 text-center text-xs font-semibold tracking-[0.2em] text-neutral-700 uppercase">
        {alt}
      </p>
    </div>
  </div>
);
