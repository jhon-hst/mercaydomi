import { useColors } from '@/hooks';
import { useLayout } from '@/providers';
import { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';

export type OnboardingItem = {
  id: number;
  titleFirstPart: string;
  titleSecondPart: string;
  titleThirdPart: string;
  description: string;
  image: any;
};

export const useOnboarding = () => {
  const { setEdges, setPaddingHorizontal } = useLayout();
  const Colors = useColors();
  const { t } = useTranslation();

  const data: OnboardingItem[] = [
    {
      description: t('Onboarding.slider2.description'),
      id: 0,
      image: 'OnboardingSliderImage1',
      titleFirstPart: t('Onboarding.slider1.titleFirstPart'),
      titleSecondPart: t('Onboarding.slider1.titleSecondPart'),
      titleThirdPart: t('Onboarding.slider1.titleThirdPart'),
    },
    {
      description: t('Onboarding.slider2.description'),
      id: 1,
      image: 'OnboardingSliderImage2',
      titleFirstPart: t('Onboarding.slider2.titleFirstPart'),
      titleSecondPart: t('Onboarding.slider2.titleSecondPart'),
      titleThirdPart: t('Onboarding.slider2.titleThirdPart'),
    },
  ];

  useLayoutEffect(() => {
    setEdges(['top', 'bottom', 'left', 'right']);
    setPaddingHorizontal(0);
  }, [setEdges, setPaddingHorizontal]);

  return {
    Colors,
    t,
    data,
  };
};
