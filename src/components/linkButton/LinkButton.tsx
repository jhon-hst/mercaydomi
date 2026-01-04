import { ColorPalette } from '@/constants';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { Text } from '../text/Text';
import { useLinkButton } from './useLinkButton';

interface LinkButtonProps {
  children: React.ReactNode;
  style: ViewStyle;
}
export const LinkButton = ({ children, style }: LinkButtonProps) => {
  const { Colors } = useLinkButton();
  const styles = createStyles(Colors);
  return (
    <TouchableOpacity style={style}>
      <Text color="primary" type="t6" style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const createStyles = (Colores: ColorPalette) =>
  StyleSheet.create({
    text: {
      textDecorationLine: 'underline',
    },
  });
