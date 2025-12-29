import { useColors } from '@/hooks';
import { useLayout } from '@/providers';
import { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useOnboarding = () => {
  const { setEdges } = useLayout();
  const Colors = useColors();
  const { t } = useTranslation();

  useLayoutEffect(() => {
    setEdges(['top', 'bottom', 'left', 'right']);
  }, [setEdges]);

  return {
    Colors,
    t,
  };
};
