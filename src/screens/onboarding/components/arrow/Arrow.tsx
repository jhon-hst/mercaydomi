import { SvgIcon } from '@shared/components';
import { getMarginApp, type Palette, scaledSize } from '@shared/utils';
import { testId } from '@src/shared/utils/testid.ts';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { type OnboardingItem } from '../../screens/useWelcomeOnboarding.ts';
import { useArrow } from './useArrows.ts';
interface ArrowsProps {
  onNext: () => void;
  onPrev: () => void;
  data: OnboardingItem[];
  currentItem: number;
}
export const Arrows = ({ currentItem, data, onNext, onPrev }: ArrowsProps) => {
  const { color } = useArrow();
  const styles = ArrowsStyles(color);
  return (
    <View style={styles.container}>
           {' '}
      <View style={styles.containerArrow}>
               {' '}
        {currentItem === 0 ? (
          <View />
        ) : (
          <TouchableOpacity
            testID={testId('arrow_left')}
            onPress={onPrev}
            style={styles.arrowLeft}
          >
                       {' '}
            <SvgIcon
              width={scaledSize(30)}
              height={scaledSize(30)}
              icon={'Arrow'}
              color={color.primaryColor}
            />
                     {' '}
          </TouchableOpacity>
        )}
             {' '}
      </View>
           {' '}
      <View testID={testId('pagination')} style={styles.containerPagination}>
               {' '}
        {data.map(({ id }) => (
          <View
            key={id}
            testID={testId('pagination_circle')}
            style={[
              styles.paginationCircle,
              currentItem === id ? styles.fullColor : {},
            ]}
          />
        ))}
             {' '}
      </View>
           {' '}
      <View style={styles.containerArrow}>
               {' '}
        <TouchableOpacity
          testID={testId('arrow_right')}
          onPress={onNext}
          style={styles.arrowRight}
        >
                   {' '}
          <SvgIcon
            width={scaledSize(30)}
            height={scaledSize(30)}
            icon={'Arrow'}
            color={color.backgroundColor}
          />
                 {' '}
        </TouchableOpacity>
             {' '}
      </View>
         {' '}
    </View>
  );
};
export const ArrowsStyles = ({ primaryColor }: Palette) => {
  const styles = StyleSheet.create({
    arrowLeft: {
      alignItems: 'center',
      borderColor: primaryColor,
      borderRadius: 10,
      borderWidth: 1,
      height: scaledSize(60),
      justifyContent: 'center',
      transform: [{ rotate: '180deg' }],
      width: scaledSize(60),
    },
    arrowRight: {
      alignItems: 'center',
      alignSelf: 'flex-end',
      backgroundColor: primaryColor,
      borderRadius: 10,
      height: scaledSize(60),
      justifyContent: 'center',
      width: scaledSize(60),
    },
    container: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: getMarginApp(),
    },
    containerArrow: {
      flex: 1,
    },
    containerPagination: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      gap: 10,
      justifyContent: 'center',
    },
    fullColor: {
      height: scaledSize(16),
      opacity: 1,
      width: scaledSize(16),
    },
    paginationCircle: {
      backgroundColor: primaryColor,
      borderRadius: 50,
      height: scaledSize(14),
      justifyContent: 'center',
      opacity: 0.5,
      width: scaledSize(14),
    },
  });
  return styles;
};
