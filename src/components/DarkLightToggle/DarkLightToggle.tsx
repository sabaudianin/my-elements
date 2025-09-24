export const DarkLightToggle = () => {
  const isDark =
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark');

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = !root.classList.contains('dark');
    root.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <section className="relative z-10 grid min-h-screen place-items-center bg-blue-500 duration-500 dark:bg-red-500">
      <label className="relative inline-flex h-8 w-14 items-center select-none">
        <input
          type="checkbox"
          className="peer sr-only"
          aria-label="Toggle theme"
          defaultChecked={isDark}
          onChange={toggleTheme}
        />
        <span className="relative block h-full w-full rounded-full bg-yellow-700 transition-colors duration-300 peer-checked:bg-blue-900 before:absolute before:top-1 before:left-1 before:grid before:h-6 before:w-6 before:place-items-center before:rounded-full before:bg-white before:text-[12px] before:leading-none before:shadow-[0_2px_6px_rgba(0,0,0,0.25)] before:transition-transform before:duration-300 before:content-['☀️'] peer-checked:before:translate-x-6 peer-checked:before:content-['🌙']" />
      </label>
    </section>
  );
};
