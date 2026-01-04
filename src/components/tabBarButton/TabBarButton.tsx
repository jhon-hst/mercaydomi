import { ColorPalette } from '@/constants';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../text/Text';

import { Icon, LucideIconName } from '../icon/Icon';
import { useTabBarButton } from './useTabBarButton';

interface TabBarButtonProps extends BottomTabBarButtonProps {
  iconName: LucideIconName;
  title: string;
}

export const TabBarButton = ({
  onPress,
  iconName,
  title,
  accessibilityLargeContentTitle,
}: TabBarButtonProps) => {
  const { Colors, isFocused } = useTabBarButton({
    accessibilityLargeContentTitle,
  });
  const styles = createStyles(Colors);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon
        name={iconName}
        color={isFocused ? Colors.primary : Colors.textSecondary}
      />
      <Text color={isFocused ? 'primary' : 'textSecondary'}>{title}</Text>
    </TouchableOpacity>
  );
};

const createStyles = (Colors: ColorPalette) =>
  StyleSheet.create({
    container: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
