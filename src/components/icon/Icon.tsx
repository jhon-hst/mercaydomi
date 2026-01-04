/* eslint-disable import/namespace */
import type { LucideIcon } from 'lucide-react-native';
import * as icons from 'lucide-react-native';

export type LucideIconName = keyof typeof icons;

interface IconProps {
  name: LucideIconName;
  color?: string;
  size?: number;
}

export const Icon = ({ name, color, size }: IconProps) => {
  const IconComponent = icons[name] as LucideIcon;

  return <IconComponent pointerEvents="none" color={color} size={size} />;
};
