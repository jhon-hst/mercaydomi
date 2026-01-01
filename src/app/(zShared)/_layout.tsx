import { Stack } from 'expo-router';
export default function SharedLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="product" options={{ title: 'Product' }} />
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
    </Stack>
  );
}
