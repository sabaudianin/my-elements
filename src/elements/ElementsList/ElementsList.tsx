import type { ReactNode } from 'react';
import { GMInput } from '../../components/GlassMorphism-Input/GMInput';
import { GradientBorder } from '../../components/GradientBorder/GradientBorder';

import { FlipCard } from '../../components/Card/FlipCard/FlipCard';
import { DarkLightToggle } from '../../components/DarkLightToggle/DarkLightToggle';
import { Slider3D } from '../../components/Slider3D/Slider3D';
import { AnimatedBg } from '../../components/AimatedBg/AnimatedBg';
import { AnimatedBgTailwindMap } from '../../components/AimatedBg/AnimatedBgTailwindMap';
import { LoadingDots } from '../../components/LoadingDots/LoadingDots';
import { ProgressBar } from '../../components/ProgressBar/ProgressBar';

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

  { id: 'flip-card', title: 'Flip Card', element: <FlipCard /> },
  { id: 'Dark-Light', title: 'Dark-Light-Toggle', element: <DarkLightToggle /> },
  { id: 'Slider-3D', title: 'Slider-3D', element: <Slider3D /> },
  { id: 'Animated-Bg', title: 'Animated-Background', element: <AnimatedBg /> },
  {
    id: 'Animated-Bg-Tailwind',
    title: 'Animated-Background-Tailwind',
    element: <AnimatedBgTailwindMap />,
  },
  {
    id: 'ProgressBar',
    title: 'Progress Bar',
    element: <ProgressBar />,
  },
  {
    id: 'LoadingDots',
    title: 'Loading Dots',
    element: <LoadingDots />,
  },
];
