import { createBrowserRouter } from 'react-router-dom';
import { About, Home } from './pages';
import { Author, Books, Chapters, Characters } from './pages/home/components';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: 'author/:name',
            element: <Author />,
            children: [
              {
                path: ':book',
                element: <Books />,
                children: [
                  {
                    path: 'chapters',
                    element: <Chapters />,
                  },
                  {
                    path: 'characters',
                    element: <Characters />,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default router;
