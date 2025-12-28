import { Text as NativeText, TextStyle } from "react-native"

type TextType = "t1" | "t2" | "t3" | "t4" | "t5" | "p1" | "p2" | "p3" | "p4" | "p5"

interface TextProps {
    children: string | React.ReactNode
    type?: TextType
    size?: number
    style?: TextStyle
}

const getFontFamily = (type?: TextType): string => {
    if (!type) return "Inter-Black"
    
    // Títulos usan Bold
    if (type.startsWith("t")) {
        return "Inter-Black"
    }
    
    // Párrafos usan Regular
    return "Inter-Black"
}

const getDefaultSize = (type?: TextType): number => {
    if (!type) return 14
    
    switch (type) {
        case "t1": return 32
        case "t2": return 28
        case "t3": return 24
        case "t4": return 20
        case "t5": return 18
        case "p1": return 18
        case "p2": return 16
        case "p3": return 14
        case "p4": return 12
        case "p5": return 10
        default: return 14
    }
}

export const Text = ({ children, type, size, style }: TextProps) => {
    const fontFamily = getFontFamily(type)
    const fontSize = size ?? getDefaultSize(type)

    return (
        <NativeText
            style={[
                {
                    fontFamily,
                    fontSize,
                },
                style,
            ]}
        >
            {children}
        </NativeText>
    )
}