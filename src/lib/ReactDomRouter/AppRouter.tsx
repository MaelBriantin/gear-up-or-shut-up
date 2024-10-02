import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from '@/routes.config';
import { withLayout } from '@utils';
import { Loading } from '@/pages/LoadingPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

const wrappedRoutes = routes.map(route => ({
  ...route,
  element: withLayout(route.element),
  errorElement: <NotFoundPage />,
}));

const router = createBrowserRouter(wrappedRoutes);

export const Router: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};