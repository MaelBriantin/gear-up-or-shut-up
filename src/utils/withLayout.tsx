import {Layout} from '@/layouts/Layout';

export const withLayout = (element: JSX.Element) => (
  <Layout>
    {element}
  </Layout>
);