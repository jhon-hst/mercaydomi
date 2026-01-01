import { ArrowLeft, ArrowRight } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { ColorPalette } from '@/constants';
import { marginApp, scale } from '@/utils';
import { OnboardingItem } from '../../useOnboarding';
import { useArrow } from './useArrow';
interface ArrowsProps {
  onNext: () => void;
  onPrev: () => void;
  data: OnboardingItem[];
  currentItem: number;
}
export const Arrows = ({ currentItem, data, onNext, onPrev }: ArrowsProps) => {
  const { Colors } = useArrow();
  const styles = createStyles(Colors);
  return (
    <View style={styles.container}>
      <View style={styles.containerArrow}>
        {currentItem === 0 ? (
          <View />
        ) : (
          <TouchableOpacity onPress={onPrev} style={styles.arrowLeft}>
            <ArrowLeft
              width={scale(30)}
              height={scale(30)}
              color={Colors.primary}
              pointerEvents="none"
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.containerPagination}>
        {data.map(({ id }) => (
          <View
            key={id}
            style={[
              styles.paginationCircle,
              currentItem === id ? styles.fullColor : {},
            ]}
          />
        ))}
      </View>
      <View style={styles.containerArrow}>
        <TouchableOpacity onPress={onNext} style={styles.arrowRight}>
          <ArrowRight
            width={scale(30)}
            height={scale(30)}
            color={Colors.background}
            pointerEvents="none"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const createStyles = ({ primary }: ColorPalette) => {
  const styles = StyleSheet.create({
    arrowLeft: {
      alignItems: 'center',
      borderColor: primary,
      borderRadius: 50,
      borderWidth: 1,
      height: scale(60),
      justifyContent: 'center',
      width: scale(60),
    },
    arrowRight: {
      alignItems: 'center',
      alignSelf: 'flex-end',
      backgroundColor: primary,
      borderRadius: 50,
      height: scale(60),
      justifyContent: 'center',
      width: scale(60),
    },
    container: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: marginApp,
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
      height: scale(16),
      opacity: 1,
      width: scale(16),
    },
    paginationCircle: {
      backgroundColor: primary,
      borderRadius: 50,
      height: scale(12),
      justifyContent: 'center',
      opacity: 0.3,
      width: scale(12),
    },
  });
  return styles;
};
