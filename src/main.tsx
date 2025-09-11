import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { GMInput } from './components/GlassMorphism-Input/GMInput';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GMInput />
  </StrictMode>,
);
