import { useColors } from '@/hooks';
import { useLayout } from '@/providers';
import { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';

export type OnboardingItem = {
  id: number;
  highlightTitle: string;
  title: string;
  description: string;
  image: any;
};

export const useOnboarding = () => {
  const { setEdges } = useLayout();
  const Colors = useColors();
  const { t } = useTranslation();

  const data: OnboardingItem[] = [
    {
      description: t('welcome'),
      highlightTitle: t('welcome'),
      id: 0,
      image: 'OnboardingSliderImage1',
      title: t('welcome'),
    },
    {
      description: t('welcome'),
      highlightTitle: t('welcome'),
      id: 1,
      image: 'OnboardingSliderImage2',
      title: t('welcome'),
    },
  ];

  useLayoutEffect(() => {
    setEdges(['top', 'bottom', 'left', 'right']);
  }, [setEdges]);

  return {
    Colors,
    t,
    data,
  };
};
