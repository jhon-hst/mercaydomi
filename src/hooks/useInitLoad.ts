import '@/i18n';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { useColorScheme } from './useColorScheme';

SplashScreen.preventAutoHideAsync();

export const useInitLoad = () => {
  const [loaded, setLoaded] = useState(false);
  const colorScheme = useColorScheme();
  const router = useRouter();

  const [loadedFonts, errorFonts] = useFonts({
    'Inter-ExtraLight': require('../assets/fonts/inter/Inter-ExtraLight.otf'),
    'Inter-Light': require('../assets/fonts/inter/Inter-Light.otf'),
    'Inter-Regular': require('../assets/fonts/inter/Inter-Regular.otf'),
    'Inter-Medium': require('../assets/fonts/inter/Inter-Medium.otf'),
    'Inter-SemiBold': require('../assets/fonts/inter/Inter-SemiBold.otf'),
    'Inter-Bold': require('../assets/fonts/inter/Inter-Bold.otf'),
    'Inter-ExtraBold': require('../assets/fonts/inter/Inter-ExtraBold.otf'),
    'Inter-Black': require('../assets/fonts/inter/Inter-Black.otf'),
  });

  useEffect(() => {
    if (loadedFonts || errorFonts) {
      SplashScreen.hide();
      setLoaded(true);
    }
  }, [loadedFonts, errorFonts]);

  return {
    loaded,
    colorScheme,
    router,
  };
};
