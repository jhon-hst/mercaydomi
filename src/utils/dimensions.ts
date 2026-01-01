import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Dimensiones base (diseño de referencia, por ejemplo iPhone 11)
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

/**
 * Escala el ancho basado en el tamaño de la pantalla
 */
export const scaleWidth = (size: number): number => {
  return (SCREEN_WIDTH / BASE_WIDTH) * size;
};

/**
 * Escala la altura basado en el tamaño de la pantalla
 */
export const scaleHeight = (size: number): number => {
  return (SCREEN_HEIGHT / BASE_HEIGHT) * size;
};

/**
 * Escala moderadamente (recomendado para fuentes y elementos UI)
 * El factor 0.5 hace que el escalado sea menos agresivo
 */
export const scale = (size: number, factor: number = 0.5): number => {
  const newSize = size + (scaleWidth(size) - size) * factor;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

/**
 * Escala vertical moderadamente
 */
export const verticalScale = (size: number, factor: number = 0.5): number => {
  const newSize = size + (scaleHeight(size) - size) * factor;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Exportar dimensiones de pantalla por si las necesitas
export const dimensions = {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
};

export const marginApp = scale(20);
