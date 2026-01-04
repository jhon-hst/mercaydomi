import { Images } from '@/assets/images';
import { Button, Image, LinkButton, Text } from '@/components';
import { ColorPalette } from '@/constants';
import { scale } from '@/utils';
import { StyleSheet, View } from 'react-native';
import { useWelcome } from './useWelcome';

export const WelcomeScreen = () => {
  const { Colors, t } = useWelcome();
  const styles = createStyles(Colors);
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={Images.defaultImage} />
      </View>
      <View style={styles.containerDescription}>
        <Text style={styles.title} type="t1" color="primary">
          {t('Welcome.title')}
        </Text>
        <Text style={styles.description} type="p6" color="textSecondary">
          {t('Welcome.description')}
        </Text>
      </View>
      <View style={styles.containerButton}>
        <Button>{t('Common.signIn')}</Button>
        <Button variant="bordered">{t('Common.signUp')}</Button>
        <LinkButton style={styles.asAGuestButton}>
          {t('Welcome.asAGuest')}
        </LinkButton>
      </View>
    </View>
  );
};

const createStyles = (Colors: ColorPalette) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    containerImage: {
      flex: 5,
    },
    containerDescription: {
      flex: 2,
      gap: scale(20),
    },
    containerButton: {
      flex: 2,
      gap: scale(20),
    },
    title: {
      textAlign: 'center',
    },
    description: {
      textAlign: 'center',
    },
    asAGuestButton: {
      alignItems: 'center',
    },
  });
