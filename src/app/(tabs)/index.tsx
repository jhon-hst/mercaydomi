import { Text } from '@/components/text';
import { useColors } from '@/hooks';
import { View } from 'react-native';

export default function Home() {
  const colors = useColors();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
      }}
    >
      <Text type="t1" color="primary">
        Home
      </Text>
      <Text type="p2" color="textSecondary">
        Bienvenido a MercayDomi
      </Text>
    </View>
  );
}
