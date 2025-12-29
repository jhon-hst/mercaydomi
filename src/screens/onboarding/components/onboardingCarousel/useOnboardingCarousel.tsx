import { useAppContext } from '@core/context';
import { Screen } from '@core/navigation/appNavigation.type.ts';
import { useRef, useState } from 'react';
import { ICarouselInstance } from 'react-native-reanimated-carousel';
import { OnboardingItem } from '../../screens/useWelcomeOnboarding.ts';
interface UseCarouselProps {
  data: OnboardingItem[];
}
export const useCarousel = ({ data }: UseCarouselProps) => {
  const [currentItem, setCurrentItem] = useState<number>(0);
  const { color, navigation } = useAppContext();
  const refCarousel = useRef<ICarouselInstance>(null);

  const onChangeCurrentItem = (index: number) => {
    setCurrentItem(index);
  };

  const onPrev = () => {
    refCarousel.current?.prev();
  };

  const onNext = () => {
    if (currentItem === data.length - 1) {
      navigation.replace(Screen.WELCOME);
    } else {
      refCarousel.current?.next();
    }
  };

  return {
    color,
    currentItem,
    onChangeCurrentItem,
    onNext,
    onPrev,
    refCarousel,
  };
};
