import { NavLink, Outlet } from "react-router-dom";
import { LIST } from "../elements/ElementsList/ElementsList";

export default function AppLayout() {
  return (
    <section className="grid min-h-screen bg-neutral-950 text-white md:grid-cols-[180px_1fr]">
      <nav className="absolute top-1 left-0 z-10">
        <NavLink
          to={`/`}
          className="p-2 bg-gray-300/20 rounded-xl font-bold text-gray-100 "
        >
          BACK
        </NavLink>
      </nav>

      <aside className="hidden flex-col gap-2 border-r border-white/10 p-4 md:flex">
        <div className="mb-1 text-sm tracking-wide uppercase opacity-60">
          LISTA ELEMENTÓW Desktop
        </div>
        <nav className="space-y-1 overflow-y-auto pr-1">
          {LIST.map((el) => (
            <NavLink
              key={el.id}
              to={`/${el.id}`}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 transition hover:bg-white/10 ${
                  isActive ? "bg-white/15 ring-1 ring-white/20" : ""
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
