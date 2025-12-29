import { marginApp, scale } from '@/utils';

import { Text } from '@/components';
import { ColorPalette } from '@/constants';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useOnboarding } from './useOnboarding';

export const OnboardingScreen = () => {
  const { Colors, t } = useOnboarding();
  const styles = createStyles(Colors);

  return (
    <View>
      <TouchableOpacity onPress={() => {}} style={styles.containerSkipButton}>
        <Text>{t('welcome')}</Text>
      </TouchableOpacity>
      {/* <OnboardingCarousel data={[1, 2]} /> */}
    </View>
  );
};

const createStyles = (Colors: ColorPalette) =>
  StyleSheet.create({
    container: {
      backgroundColor: Colors.background,
    },
    containerSkipButton: {
      alignItems: 'flex-end',
      height: scale(50),
      justifyContent: 'center',
      marginRight: marginApp,
    },
  });
