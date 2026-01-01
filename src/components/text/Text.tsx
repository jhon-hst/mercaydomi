import { useColors } from '@/hooks';
import { scale } from '@/utils';
import { Text as NativeText, StyleSheet, TextStyle } from 'react-native';

type TextType =
  | 't1'
  | 't2'
  | 't3'
  | 't4'
  | 't5'
  | 't6'
  | 't7'
  | 't8'
  | 't9'
  | 't10'
  | 'p1'
  | 'p2'
  | 'p3'
  | 'p4'
  | 'p5'
  | 'p6'
  | 'p7'
  | 'p8'
  | 'p9'
  | 'p10';

type FontFamilyType =
  | 'Inter-ExtraLight'
  | 'Inter-Light'
  | 'Inter-Regular'
  | 'Inter-Medium'
  | 'Inter-SemiBold'
  | 'Inter-Bold'
  | 'Inter-ExtraBold'
  | 'Inter-Black';

interface TextProps {
  children: string | React.ReactNode;
  type?: TextType;
  size?: number;
  style?: TextStyle;
  color?: 'primary' | 'textPrimary' | 'textSecondary' | 'background';
  fontFamily?: FontFamilyType;
}

const getFontFamilyByType = (type?: TextType): FontFamilyType => {
  if (!type) return 'Inter-Regular';

  // Títulos usan Bold
  if (type.startsWith('t')) {
    return 'Inter-SemiBold';
  }

  // Párrafos usan Regular
  return 'Inter-Regular';
};

const getDefaultSize = (type?: TextType): number => {
  if (!type) return scale(14);

  switch (type) {
    case 't1':
      return scale(32);
    case 't2':
      return scale(28);
    case 't3':
      return scale(24);
    case 't4':
      return scale(20);
    case 't5':
      return scale(18);
    case 't6':
      return scale(16);
    case 't7':
      return scale(14);
    case 't8':
      return scale(12);
    case 't9':
      return scale(10);
    case 't10':
      return scale(8);
    case 'p1':
      return scale(32);
    case 'p2':
      return scale(28);
    case 'p3':
      return scale(24);
    case 'p4':
      return scale(20);
    case 'p5':
      return scale(18);
    case 'p6':
      return scale(16);
    case 'p7':
      return scale(14);
    case 'p8':
      return scale(12);
    case 'p9':
      return scale(10);
    case 'p10':
      return scale(8);
    default:
      return scale(14);
  }
};

export const Text = ({
  children,
  type,
  size,
  style,
  color = 'textPrimary',
  fontFamily,
}: TextProps) => {
  const colors = useColors();
  const defaultFontFamily = fontFamily || getFontFamilyByType(type);
  const fontSize = size ?? getDefaultSize(type);
  const styles = createStyles({
    fontFamily: defaultFontFamily,
    fontSize,
    textColor: colors[color],
  });

  return <NativeText style={[styles.baseStyles, style]}>{children}</NativeText>;
};

const createStyles = ({
  fontFamily,
  fontSize,
  textColor,
}: {
  fontFamily: string;
  fontSize: number;
  textColor: string;
}) =>
  StyleSheet.create({
    baseStyles: {
      fontFamily,
      fontSize: scale(fontSize),
      color: textColor,
    },
  });
