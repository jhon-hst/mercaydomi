import { useLayout } from '@/providers';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  const { setEdges } = useLayout();
  React.useEffect(() => {
    setEdges(['top', 'left', 'right']);
  }, [setEdges]);
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="shoppingCart"
        options={{
          title: 'Shopping Cart',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
        }}
      />
    </Tabs>
  );
}
