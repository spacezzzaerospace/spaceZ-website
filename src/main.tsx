import { StrictMode } from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import './homepage.css';
import './sitewide.css';

// Cross-document snapshots must see the initial content before the first paint.
flushSync(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode><App /></StrictMode>,
  );
});
