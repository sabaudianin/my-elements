import type { ReactNode } from 'react';
import { GMInput } from '../../components/GlassMorphism-Input/GMInput';
import { GradientBorder } from '../../components/GradientBorder/GradientBorder';

export type List = {
  id: string;
  title: string;
  element: ReactNode;
};

export const LIST: List[] = [
  { id: 'gm-input', title: 'Glassmorphism Login', element: <GMInput /> },
  { id: 'gradient-border', title: 'Gradient Border', element: <GradientBorder /> },
];
