import { Stack } from 'expo-router';
export default function SharedLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="(onboarding)" options={{ title: 'Help Center' }} />
      <Stack.Screen name="(product)" options={{ title: 'Profile' }} />
    </Stack>
  );
}
