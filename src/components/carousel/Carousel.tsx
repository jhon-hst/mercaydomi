import React, { forwardRef } from 'react';

import CarouselRN, {
  CarouselRenderItem,
  ICarouselInstance,
  TCarouselProps,
} from 'react-native-reanimated-carousel';

type CarouselProps<T> = TCarouselProps<T> & {
  renderItem: CarouselRenderItem<T>;
  onChangeCurrentItem: (index: number) => void;
  data: T[];
  testID?: string;
};

export const Carousel = forwardRef<ICarouselInstance, CarouselProps<any>>(
  ({ data, onChangeCurrentItem, renderItem, testID, ...props }, ref) => {
    return (
      <CarouselRN
        ref={ref}
        testID={testID}
        data={data}
        renderItem={renderItem}
        pagingEnabled
        onProgressChange={(_: number, index: number) => {
          onChangeCurrentItem(Number(index.toFixed(0)));
        }}
        {...props}
      />
    );
  },
);

Carousel.displayName = 'Carousel';
