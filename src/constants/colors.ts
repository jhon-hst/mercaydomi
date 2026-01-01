/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

export const Colors = {
  light: {
    primary: '#01AC66',
    textPrimary: '#242424',
    textSecondary: '#8f8f8f',
    background: '#FFFFFF',
    backgroundSecondary: '#F5F5F5',
    border: '#E0E0E0',
    error: '#DC3545',
    success: '#28A745',
    warning: '#FFC107',
    info: '#17A2B8',
  },
  dark: {
    primary: '#01AC66',
    textPrimary: '#242424',
    textSecondary: '#8f8f8f',
    background: '#FFFFFF',
    backgroundSecondary: '#F5F5F5',
    border: '#E0E0E0',
    error: '#DC3545',
    success: '#28A745',
    warning: '#FFC107',
    info: '#17A2B8',
  },
};

export type ColorScheme = 'light' | 'dark';
export type ColorKey = keyof typeof Colors.light;
export type ColorPalette = typeof Colors.light;
