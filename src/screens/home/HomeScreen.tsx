import { BannerCarousel } from '@/components';
import { ColorPalette } from '@/constants';
import { ScrollView, StyleSheet } from 'react-native';
import { useHomeScreen } from './useHomeScreen';

const carouselData = [
  {
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXnC3fwMwkbIt3ejGRIw3NmbDyUtgS5g2jA&s',
  },
  {
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXnC3fwMwkbIt3ejGRIw3NmbDyUtgS5g2jA&s',
  },
  {
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXnC3fwMwkbIt3ejGRIw3NmbDyUtgS5g2jA&s',
  },
];
export const HomeScreen = () => {
  const { Colors } = useHomeScreen();
  const style = createStyles(Colors);
  return (
    <ScrollView contentContainerStyle={style.container}>
      <BannerCarousel items={carouselData} />
    </ScrollView>
  );
};

const createStyles = (Colors: ColorPalette) =>
  StyleSheet.create({
    container: {
      minHeight: '100%',
    },
  });
