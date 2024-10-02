import { RouteConfigInterface } from '@types';
import { 
  HomePage, 
  PlayPage,
  NotFoundPage
} from '@pages';


export const routes: RouteConfigInterface[] = [
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
];