import { RouteConfigInterface } from '@types';
import { 
  HomePage, 
  PlayPage,
  NotFoundPage
} from '@pages';
import { MainLayout } from './layouts/MainLayout';


export const routes: RouteConfigInterface[] = [
  {
    path: "/",
    element: <MainLayout />,
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