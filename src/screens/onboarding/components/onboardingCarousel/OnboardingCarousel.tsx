import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Carousel, Text } from '@/components';
import { dimensions, marginApp } from '@/utils';
import { OnboardingItem } from '../../useOnboarding';
import { Arrows } from '../arrow/Arrow';
import { useOnboardingCarousel } from './useOnboardingCarousel';
interface CarouselProps {
  data: OnboardingItem[];
}

export const OnboardingCarousel = ({ data }: CarouselProps) => {
  const { currentItem, onChangeCurrentItem, onNext, onPrev, refCarousel } =
    useOnboardingCarousel({ data });
  const styles = CarouselStyles();
  return (
    <>
      <View style={styles.containerCarousel}>
        <Carousel
          ref={refCarousel}
          data={data}
          onChangeCurrentItem={onChangeCurrentItem}
          loop={false}
          renderItem={({ item }) => (
            <View style={styles.containerItem}>
              <View style={styles.containerImage}>
                <Text style={styles.title}>{item.highlightTitle}</Text>
              </View>
              <View style={styles.containerTitle}>
                <Text style={styles.title}>{item.highlightTitle}</Text>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <View style={styles.containerDescription}>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          )}
          pagingEnabled
          width={dimensions.SCREEN_WIDTH}
        />
      </View>

      <Arrows
        data={data}
        onNext={onNext}
        onPrev={onPrev}
        currentItem={currentItem}
      />
    </>
  );
};
export const CarouselStyles = () => {
  const styles = StyleSheet.create({
    containerCarousel: {
      flex: 5,
    },
    containerDescription: {
      alignItems: 'center',
      flex: 1,
    },
    containerImage: {
      alignItems: 'center',
      flex: 6,
    },
    containerItem: {
      flex: 1,
      paddingHorizontal: marginApp,
    },
    containerTitle: {
      flex: 2,
      justifyContent: 'center',
    },
    description: {
      textAlign: 'center',
      width: '80%',
    },
    title: {
      textAlign: 'center',
    },
  });
  return styles;
};
