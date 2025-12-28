import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";

export const useInitLoad = () => {
    const [loadedFonts, errorFonts] = useFonts({
        'Inter-ExtraLight': require('../assets/fonts/inter/Inter-ExtraLight.otf'),
        'Inter-Light': require('../assets/fonts/inter/Inter-Light.otf'),
        'Inter-Regular': require('../assets/fonts/inter/Inter-Regular.otf'),
        'Inter-Medium': require('../assets/fonts/inter/Inter-Medium.otf'),
        'Inter-SemiBold': require('../assets/fonts/inter/Inter-SemiBold.otf'),
        'Inter-Bold': require('../assets/fonts/inter/Inter-Bold.otf'),
        'Inter-ExtraBold': require('../assets/fonts/inter/Inter-ExtraBold.otf'),
        'Inter-Black': require('../assets/fonts/inter/Inter-Black.otf'),
    })
      
    useEffect(() => {
        if (loadedFonts || errorFonts) {
            SplashScreen.hideAsync();
        }
    }, [loadedFonts, errorFonts]);

    return [];
}