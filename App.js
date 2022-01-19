import React from 'react';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import { LoginScreen } from './screens/login';
import { theme } from './components/App.style';
import { Custo } from './screens/custos';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <LoginScreen/>
      
    </PaperProvider>
  );
};

