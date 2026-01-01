import { OnboardingScreen } from '@/screens';
import { Redirect } from 'expo-router';

// TODO: Reemplazar con la lógica real de almacenamiento persistente
const hasSeenOnboarding = true;

export default function Index() {
  if (hasSeenOnboarding) {
    return <Redirect href="/(zShared)/welcome" />;
  }
  return <OnboardingScreen />;
}
