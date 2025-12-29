import { useLayout } from '@/providers';
import { useLayoutEffect } from 'react';

export const useOnboarding = () => {
  const { setEdges } = useLayout();

  useLayoutEffect(() => {
    setEdges(['top', 'bottom', 'left', 'right']);
  }, [setEdges]);
};
