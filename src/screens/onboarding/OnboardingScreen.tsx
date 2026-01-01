import { marginApp, scale } from '@/utils';

import { Text } from '@/components';
import { ColorPalette } from '@/constants';
import React from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { OnboardingCarousel } from './components/onboardingCarousel/OnboardingCarousel';
import { useOnboarding } from './useOnboarding';

export const OnboardingScreen = () => {
  const { Colors, t, data } = useOnboarding();
  const styles = createStyles(Colors);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.background} barStyle="dark-content" />
      <TouchableOpacity onPress={() => {}} style={styles.containerSkipButton}>
        <Text color="primary" fontFamily="Inter-Medium">
          {t('Onboarding.skip')}
        </Text>
      </TouchableOpacity>
      <OnboardingCarousel data={data} />
    </View>
  );
};

const createStyles = (Colors: ColorPalette) =>
  StyleSheet.create({
    container: {
      backgroundColor: Colors.background,
      flex: 1,
    },
    containerSkipButton: {
      alignItems: 'flex-end',
      height: scale(50),
      justifyContent: 'center',
      marginRight: marginApp,
    },
  });
