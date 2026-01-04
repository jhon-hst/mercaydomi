import { ColorPalette } from '@/constants';
import { scale } from '@/utils';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../text/Text';
import { useButton } from './useButton';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'filled' | 'bordered';
}
export const Button = ({ children, variant = 'filled' }: ButtonProps) => {
  const { Colors } = useButton();
  const styles = createStyles(Colors);

  const variantStyle =
    variant === 'bordered' ? styles.borderedButton : styles.filledButton;
  const textColor = variant === 'bordered' ? 'primary' : 'background';

  return (
    <TouchableOpacity style={[styles.baseButton, variantStyle]}>
      <Text color={textColor} type="t5">
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const createStyles = (Colores: ColorPalette) =>
  StyleSheet.create({
    filledButton: {
      backgroundColor: Colores.primary,
    },
    borderedButton: {
      backgroundColor: Colores.background,
    },
    baseButton: {
      height: scale(50),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: scale(8),
      borderColor: Colores.primary,
      borderWidth: scale(1),
    },
  });
