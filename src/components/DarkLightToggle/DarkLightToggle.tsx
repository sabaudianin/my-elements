export const DarkLightToggle = () => {
  return (
    <section className="grid min-h-screen place-items-center">
      <label className="relative inline-flex h-8 w-14 items-center select-none">
        <input type="checkbox" className="peer sr-only" aria-label="Toggle theme" />

        <span className="relative block h-full w-full rounded-full bg-yellow-700 transition-colors duration-300 peer-checked:bg-blue-900 before:absolute before:top-1 before:left-1 before:grid before:h-6 before:w-6 before:place-items-center before:rounded-full before:bg-white before:text-[12px] before:leading-none before:shadow-[0_2px_6px_rgba(0,0,0,0.25)] before:transition-transform before:duration-300 before:content-['☀️'] peer-checked:before:translate-x-6 peer-checked:before:content-['🌙']" />
      </label>
    </section>
  );
};
