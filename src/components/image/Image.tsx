import { ImageProps, Image as ImageRN } from 'react-native';

export const Image = ({ ...props }: ImageProps) => {
  return <ImageRN {...props} />;
};
