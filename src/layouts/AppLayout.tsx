import { NavLink, Outlet } from 'react-router-dom';
import { LIST } from '../elements/ElementsList/ElementsList';

export default function AppLayout() {
  return (
    <section className="grid min-h-screen w-full bg-neutral-950 text-white md:grid-cols-[180px_1fr]">
      <nav className="absolute top-0 left-0 z-10">
        <NavLink
          to={`/`}
          className="inline-flex items-center rounded-lg bg-white/10 px-3 py-2 font-bold text-gray-100 text-white hover:bg-white/20"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H7" />
            <path d="M12 5l-7 7 7 7" />
          </svg>
        </NavLink>
      </nav>

      <aside className="hidden flex-col gap-2 border-r border-white/10 md:flex">
        <div className="mt-12 mb-1 text-sm tracking-wide uppercase opacity-60">
          LISTA ELEMENTÓW Desktop
        </div>
        <nav className="space-y-1 overflow-y-auto pr-1">
          {LIST.map((el) => (
            <NavLink
              key={el.id}
              to={`/${el.id}`}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 transition hover:bg-white/10 ${
                  isActive ? 'bg-white/15 ring-1 ring-white/20' : ''
                }`
              }
            >
              {el.title}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="min-h-screen md:min-h-0">
        <Outlet />
      </main>
    </section>
  );
}
