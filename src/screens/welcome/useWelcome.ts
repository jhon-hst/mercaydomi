import { useColors } from '@/hooks';
import { useTranslation } from 'react-i18next';

export const useWelcome = () => {
  const Colors = useColors();
  const { t } = useTranslation();
  return { Colors, t };
};
