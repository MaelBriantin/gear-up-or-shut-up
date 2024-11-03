import { StrictMode, createRoot, Suspense } from '@lib';
import { App } from '@/App';
import "@/lib/i18n";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense>
      <App />
    </Suspense>
  </StrictMode>,
);