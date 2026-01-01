import { useColors } from '@/hooks';

export const useButton = () => {
  const Colors = useColors();
  return { Colors };
};
