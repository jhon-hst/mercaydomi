import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { createContext, ReactNode, useContext, useState } from 'react';
import { ViewStyle } from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

interface LayoutContextType {
  statusBarStyle: StatusBarStyle;
  paddingHorizontal: number;
  edges: Edge[];
  setStatusBarStyle: (style: StatusBarStyle) => void;
  setPaddingHorizontal: (padding: number) => void;
  setEdges: (edges: Edge[]) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

interface LayoutProviderProps {
  children: ReactNode;
}

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>('light');
  const [paddingHorizontal, setPaddingHorizontal] = useState(16);
  const [edges, setEdges] = useState<Edge[]>([
    'top',
    'bottom',
    'left',
    'right',
  ]);

  const containerStyle: ViewStyle = {
    flex: 1,
    paddingHorizontal,
  };

  return (
    <LayoutContext.Provider
      value={{
        statusBarStyle,
        paddingHorizontal,
        edges,
        setStatusBarStyle,
        setPaddingHorizontal,
        setEdges,
      }}
    >
      <SafeAreaView style={containerStyle} edges={edges}>
        <StatusBar style={statusBarStyle} />
        {children}
      </SafeAreaView>
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
