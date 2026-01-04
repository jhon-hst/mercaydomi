import { ColorPalette } from '@/constants';
import { dimensions, marginApp, scale } from '@/utils';
import { StyleSheet, View } from 'react-native';
import { Carousel } from '../carousel/Carousel';
import { Banner } from './components/banner/Banner';
import { Dots } from './components/dots/Dots';
import { useBannerCarousel } from './useBannerCarousel';

interface BannerCarouselProps {
  items: BannerCarouselData[];
}

export const BannerCarousel = ({ items }: BannerCarouselProps) => {
  const { Colors, refCarousel, currentItem, onChangeCurrentItem } =
    useBannerCarousel();
  const itemWidth = dimensions.SCREEN_WIDTH - marginApp * 2 + scale(8);
  const styles = createStyles(Colors);
  return (
    <View style={styles.container}>
      <Carousel
        enabled={items.length > 1}
        data={items}
        ref={refCarousel}
        renderItem={({ item }) => <Banner item={item} />}
        onChangeCurrentItem={onChangeCurrentItem}
        width={itemWidth}
        pagingEnabled
        style={styles.carouselContainer}
      />
      {items.length > 1 && <Dots items={items} currentItem={currentItem} />}
    </View>
  );
};

const createStyles = (Colors: ColorPalette) =>
  StyleSheet.create({
    container: {
      height: scale(150),
    },
    carouselContainer: {
      width: dimensions.SCREEN_WIDTH,
      justifyContent: 'center',
    },
  });
