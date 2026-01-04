import { useColors } from '@/hooks';
import { usePathname } from 'expo-router';

interface UseTabBarButtonProps {
  accessibilityLargeContentTitle?: string;
}
export const useTabBarButton = ({
  accessibilityLargeContentTitle,
}: UseTabBarButtonProps) => {
  const Colors = useColors();
  const pathname = usePathname();
  const viewTitle =
    accessibilityLargeContentTitle === 'index'
      ? '/'
      : `/${accessibilityLargeContentTitle}`;

  const isFocused = viewTitle === pathname;

  return {
    Colors,
    isFocused,
  };
};
