import { useColors } from '@/hooks';

export const useBanner = () => {
  const Colors = useColors();

  return {
    Colors,
  };
};
