import { ColorPalette } from '@/constants';
import { scale } from '@/utils';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../text/Text';
import { useButton } from './useButton';

interface ButtonProps {
  children: React.ReactNode;
}
export const Button = ({ children }: ButtonProps) => {
  const { Colors } = useButton();
  const styles = createStyles(Colors);
  return (
    <TouchableOpacity style={styles.container}>
      <Text color="background" type="t5">
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const createStyles = (Colores: ColorPalette) =>
  StyleSheet.create({
    container: {
      backgroundColor: Colores.primary,
      height: scale(50),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: scale(8),
    },
  });
