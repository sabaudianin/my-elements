import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { LIST } from './elements/ElementsList/ElementsList';

const listRoutes = LIST.map((el) => ({
  path: `/${el.id}`,
  element: el.element,
}));

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      ...listRoutes,
      { path: '*', element: <NotFound /> },
    ],
  },
]);
