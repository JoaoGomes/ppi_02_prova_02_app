import React from 'react';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import { LoginScreen } from './screens/login';
import { theme } from './components/App.style';
import { Custo } from './screens/custos';
import { HomeScreen } from './screens/home';
import AppNavigator from './screens/app.navigator';

export default function App() {

  return (
    <PaperProvider theme={theme}>
      <LoginScreen />
    </PaperProvider>
  );
};

