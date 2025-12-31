import { useColors } from '@/hooks';
import { useRef, useState } from 'react';
import { ICarouselInstance } from 'react-native-reanimated-carousel';
import { OnboardingItem } from '../../useOnboarding';

interface UseCarouselProps {
  data: OnboardingItem[];
}
export const useOnboardingCarousel = ({ data }: UseCarouselProps) => {
  const [currentItem, setCurrentItem] = useState<number>(0);
  const refCarousel = useRef<ICarouselInstance>(null);
  const Colores = useColors();

  const onChangeCurrentItem = (index: number) => {
    setCurrentItem(index);
  };

  const onPrev = () => {
    refCarousel.current?.prev();
  };

  const onNext = () => {
    if (currentItem === data.length - 1) {
      //navigate
    } else {
      refCarousel.current?.next();
    }
  };

  return {
    Colores,
    currentItem,
    onChangeCurrentItem,
    onNext,
    onPrev,
    refCarousel,
  };
};
