import { Link } from 'react-router-dom';
import { LIST } from '../elements/ElementsList/ElementsList';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8 sm:hidden">
      <h2 className="mb-4 text-2xl font-semibold">Lista Elementów:</h2>
      <ul className="space-y-2">
        {LIST.map((el) => (
          <li key={el.id}>
            <Link
              to={`/${el.id}`}
              className="inline-block rounded-lg bg-white/10 px-3 py-2 hover:bg-white/15"
            >
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
