import { App } from '@/App';
import { StrictMode, createRoot } from '@lib';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);