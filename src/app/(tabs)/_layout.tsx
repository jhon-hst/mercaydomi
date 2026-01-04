import { Tabs } from 'expo-router';
import React, { useEffect } from 'react';

import { TabBarButton } from '@/components';
import { useLayout } from '@/providers';
import { scale } from '@/utils';
import { useTranslation } from 'react-i18next';

export default function TabLayout() {
  const { setEdges, setPaddingHorizontal } = useLayout();
  const { t } = useTranslation();

  useEffect(() => {
    setEdges(['top', 'right', 'left']);
    setPaddingHorizontal(0);
  }, [setEdges, setPaddingHorizontal]);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderRadius: scale(12),
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={() => ({
          tabBarButton: (props) => (
            <TabBarButton
              {...props}
              title={t('Common.home')}
              iconName="LucideHome"
            />
          ),
        })}
      />
      <Tabs.Screen
        name="shoppingCart"
        options={() => ({
          tabBarButton: (props) => (
            <TabBarButton
              {...props}
              title={t('Common.shoppingCart')}
              iconName="ShoppingBasket"
            />
          ),
        })}
      />
      <Tabs.Screen
        name="profile"
        options={() => ({
          tabBarButton: (props) => (
            <TabBarButton
              {...props}
              title={t('Common.profile')}
              iconName="User"
            />
          ),
        })}
      />
    </Tabs>
  );
}
