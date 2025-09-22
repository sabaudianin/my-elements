import type { ReactNode } from 'react';
import { GMInput } from '../../components/GlassMorphism-Input/GMInput';
import { GradientBorder } from '../../components/GradientBorder/GradientBorder';
import { GradientBorderTailwind } from '../../components/GradientBorder/GradientBorderTailwind';
import { FlipCard } from '../../components/Card/FlipCard/FlipCard';

export type List = {
  id: string;
  title: string;
  element: ReactNode;
};

export const LIST: List[] = [
  { id: 'gm-input', title: 'Glassmorphism Login', element: <GMInput /> },
  {
    id: 'gradient-border',
    title: 'Gradient Border',
    element: <GradientBorder />,
  },
  {
    id: 'gradient-border-tailwind',
    title: 'Gradient Border tailwind',
    element: <GradientBorderTailwind />,
  },
  { id: 'flip-card', title: 'Flip Card', element: <FlipCard /> },
];
