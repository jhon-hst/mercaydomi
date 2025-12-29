import { Carousel, SvgIcon, Text } from '@shared/components';
import { getMarginApp, screenWidth } from '@shared/utils';
import { testId } from '@src/shared/utils/testid.ts';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
    configureReanimatedLogger,
    ReanimatedLogLevel,
} from 'react-native-reanimated';
import { type OnboardingItem } from '../../screens/useWelcomeOnboarding.ts';
import { Arrows } from '../arrows/Arrows.tsx';
import { useCarousel } from './useOnboardingCarousel.ts';
interface CarouselProps {
  data: OnboardingItem[];
}
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});
export const OnboardingCarousel = ({ data }: CarouselProps) => {
  const { currentItem, onChangeCurrentItem, onNext, onPrev, refCarousel } =
    useCarousel({ data });
  const styles = CarouselStyles();
  return (
    <>
           {' '}
      <View style={styles.containerCarousel}>
               {' '}
        <Carousel
          ref={refCarousel}
          testID={testId('onboarding_carousel')}
          data={data}
          onChangeCurrentItem={onChangeCurrentItem}
          loop={false}
          renderItem={({ item }) => (
            <View style={styles.containerItem}>
                           {' '}
              <View style={styles.containerImage}>
                               {' '}
                <SvgIcon
                  testID={`image_${item.id}`}
                  icon={item.image}
                  width={'100%'}
                  height={'100%'}
                />
                             {' '}
              </View>
                           {' '}
              <View style={styles.containerTitle}>
                               {' '}
                <Text
                  preset="h1"
                  weight="p400"
                  color="textColorRed"
                  style={styles.title}
                >
                                    {item.highlightTitle}
                                 {' '}
                </Text>
                               {' '}
                <Text
                  preset="h1"
                  weight="p400"
                  color="textColorBlack"
                  style={styles.title}
                >
                                    {item.title}
                                 {' '}
                </Text>
                             {' '}
              </View>
                           {' '}
              <View style={styles.containerDescription}>
                               {' '}
                <Text preset="p4" weight="os400" style={styles.description}>
                                    {item.description}
                                 {' '}
                </Text>
                             {' '}
              </View>
                         {' '}
            </View>
          )}
          pagingEnabled
          width={screenWidth}
        />
             {' '}
      </View>
           {' '}
      <Arrows
        data={data}
        onNext={onNext}
        onPrev={onPrev}
        currentItem={currentItem}
      />
         {' '}
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
      paddingHorizontal: getMarginApp(),
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
