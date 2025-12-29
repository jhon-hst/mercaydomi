import { Colors, ColorScheme } from '@/constants';
import { useColorScheme } from 'react-native';

/**
 * Hook que devuelve los colores del tema actual (light/dark)
 *
 * @example
 * const colors = useColors();
 * <View style={{ backgroundColor: colors.background }}>
 *   <Text style={{ color: colors.textPrimary }}>Hello</Text>
 * </View>
 */
export const useColors = () => {
  const colorScheme = useColorScheme();
  const scheme: ColorScheme = colorScheme === 'dark' ? 'dark' : 'light';

  return Colors[scheme];
};
