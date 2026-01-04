import { Image } from '@/components/image/Image';
import { ColorPalette } from '@/constants';
import { scale } from '@/utils';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useBanner } from './useBanner';

interface BannerProps {
  item: BannerCarouselData;
}

export const Banner = ({ item }: BannerProps) => {
  const { Colors } = useBanner();
  const styles = createStyles(Colors);
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.imageUrl,
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

const createStyles = (Colors: ColorPalette) =>
  StyleSheet.create({
    container: {
      height: scale(150),
      width: '100%',
      paddingHorizontal: scale(4),
      position: 'relative',
      borderRadius: scale(12),
    },
    image: {
      height: '100%',
      width: '100%',
      borderRadius: scale(12),
    },
  });
