import { useColors } from '@/hooks';

export const useHomeScreen = () => {
  const Colors = useColors();

  return {
    Colors,
  };
};
