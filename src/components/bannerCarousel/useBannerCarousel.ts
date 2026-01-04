import { useColors } from '@/hooks';
import { useRef, useState } from 'react';
import { ICarouselInstance } from 'react-native-reanimated-carousel';

export const useBannerCarousel = () => {
  const Colors = useColors();
  const refCarousel = useRef<ICarouselInstance>(null);
  const [currentItem, setCurrentItem] = useState(0);

  const onChangeCurrentItem = (index: number) => {
    setCurrentItem(index);
  };

  return {
    Colors,
    refCarousel,
    currentItem,
    onChangeCurrentItem,
  };
};
