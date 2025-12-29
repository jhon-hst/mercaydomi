import { Text } from '@/components';
import { View } from 'react-native';
import { useOnboarding } from './useOnboarding';

export const OnboardingScreen = () => {
  useOnboarding();
  return (
    <View>
      <Text>Onboarding Screen</Text>
    </View>
  );
};
