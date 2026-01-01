import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Images } from '@/assets/images';
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
          renderItem={({ item }: { item: OnboardingItem }) => (
            <View style={styles.containerItem}>
              <View style={styles.containerImage}>
                <Image source={Images.defaultImage} />
              </View>
              <View style={styles.containerTitle}>
                <Text>
                  <Text type="t2" style={styles.title}>
                    {item.titleFirstPart}{' '}
                  </Text>{' '}
                  <Text type="t2" color="primary" style={styles.title}>
                    {item.titleSecondPart}
                  </Text>{' '}
                  <Text type="t2" style={styles.title}>
                    {item.titleThirdPart}
                  </Text>
                </Text>
              </View>
              <View style={styles.containerDescription}>
                <Text
                  color="textSecondary"
                  style={styles.description}
                  size={16}
                >
                  {item.description}
                </Text>
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
