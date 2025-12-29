import { useInitLoad } from '@/hooks';
import { LayoutProvider } from '@/providers';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { Stack } from 'expo-router';

export default function RootLayout() {
  const { loaded, colorScheme } = useInitLoad();

  if (!loaded) {
    return null;
  }
  return (
    <LayoutProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(zShared)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
      {/* <StatusBar backgroundColor="#000000" /> */}
    </LayoutProvider>
  );
}
