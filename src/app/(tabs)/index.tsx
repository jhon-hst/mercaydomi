import { Text } from '@/components/text';
import { useColors } from '@/hooks';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

export default function Home() {
  const colors = useColors();
  const { t } = useTranslation();
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
        {t('welcome')}
      </Text>
      <Text type="p2" color="textSecondary">
        Bienvenido a mercadomy
      </Text>
    </View>
  );
}
