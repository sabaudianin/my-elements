import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="p-6">
      <h1 className="mb-2 text-2xl font-semibold">404 Nie znaleziono </h1>
      <p className="mb-4 opacity-70">Ta ścieżka nie istnieje lub bark zasobu</p>
      <Link to="/" className="rounded-lg bg-white/10 px-3 py-2 hover:bg-white/15">
        Wróć do listy elementów
      </Link>
    </section>
  );
}
