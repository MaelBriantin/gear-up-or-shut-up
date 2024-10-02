import { RouteConfigInterface } from '@types';
import { 
  HomePage, 
  TestPage 
} from '@pages';


export const routes: RouteConfigInterface[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/test',
    element: <TestPage />,
  },
];