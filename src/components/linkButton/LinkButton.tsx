import { ColorPalette } from '@/constants';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../text/Text';
import { useLinkButton } from './useLinkButton';

interface LinkButtonProps {
  children: React.ReactNode;
}
export const LinkButton = ({ children }: LinkButtonProps) => {
  const { Colors } = useLinkButton();
  const styles = createStyles(Colors);
  return (
    <TouchableOpacity>
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
