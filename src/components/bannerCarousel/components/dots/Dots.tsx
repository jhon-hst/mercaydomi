import { ColorPalette } from '@/constants';
import { scale } from '@/utils';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDots } from './useDots';
interface DotsProps {
  currentItem: number;
  items: any[];
}
export const Dots = ({ currentItem, items }: DotsProps) => {
  const { Colors } = useDots();
  const styles = createStyles(Colors);
  const currentDot = currentItem > items.length - 1 ? 0 : currentItem;
  return (
    <View style={styles.containerDots}>
      {items.map((_, index) => (
        <View
          key={index}
          style={[styles.dot, currentDot === index ? styles.activeItem : {}]}
        />
      ))}
    </View>
  );
};
const createStyles = ({ primary, border }: ColorPalette) =>
  StyleSheet.create({
    containerDots: {
      flexDirection: 'row',
      gap: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: scale(8),
    },
    activeItem: {
      height: scale(12),
      backgroundColor: primary,
      width: scale(12),
      opacity: 1,
    },
    dot: {
      backgroundColor: primary,
      borderRadius: 50,
      height: scale(10),
      width: scale(10),
      opacity: 0.3,
    },
  });
