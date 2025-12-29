import { useColors } from '@/hooks';
import { createContext, ReactNode, useContext, useState } from 'react';
import { ViewStyle } from 'react-native';
import {
  Edge,
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

interface LayoutContextType {
  paddingHorizontal: number;
  edges: Edge[];
  setPaddingHorizontal: (padding: number) => void;
  setEdges: (edges: Edge[]) => void;
  setBackgroundColor: (color: string) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

interface LayoutProviderProps {
  children: ReactNode;
}

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [paddingHorizontal, setPaddingHorizontal] = useState(16);
  const Colors = useColors();
  const [backgroundColor, setBackgroundColor] = useState(Colors.background);
  const [edges, setEdges] = useState<Edge[]>([
    'top',
    'bottom',
    'left',
    'right',
  ]);

  const containerStyle: ViewStyle = {
    flex: 1,
    paddingHorizontal,
    backgroundColor: backgroundColor,
  };

  return (
    <LayoutContext.Provider
      value={{
        paddingHorizontal,
        edges,
        setPaddingHorizontal,
        setEdges,
        setBackgroundColor,
      }}
    >
      <SafeAreaProvider>
        <SafeAreaView style={containerStyle} edges={edges}>
          {children}
        </SafeAreaView>
      </SafeAreaProvider>
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};
