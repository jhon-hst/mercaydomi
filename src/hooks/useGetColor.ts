import { useColorScheme } from "react-native";

export const useGetColor = () => {
    const colorScheme = useColorScheme();

    const getColor = (lightColor: string, darkColor: string): string => {
        return colorScheme === 'dark' ? darkColor : lightColor;
    };

    return {
        getColor,
    };
}