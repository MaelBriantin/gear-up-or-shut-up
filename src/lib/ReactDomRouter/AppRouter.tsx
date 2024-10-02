import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from '@/routes.config';
import { withLayout } from '@utils';
import { Loading } from '@/pages/LoadingPage';

const wrappedRoutes = routes.map(route => ({
  ...route,
  element: withLayout(route.element),
}));

const router = createBrowserRouter(wrappedRoutes);

export const Router: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};