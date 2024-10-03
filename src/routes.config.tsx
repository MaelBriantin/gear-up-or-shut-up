import { RouteConfigInterface } from '@types';
import { 
  HomePage, 
  PlayPage,
  NotFoundPage
} from '@pages';
import { Layout } from './layouts/Layout';


export const routes: RouteConfigInterface[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '*',
        element: <NotFoundPage />,
      },
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/play',
        element: <PlayPage />,
      },
    ],
  },
];