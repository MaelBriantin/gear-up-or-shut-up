import { StrictMode, createRoot, Suspense } from '@lib';
import { App } from '@/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </StrictMode>,
);