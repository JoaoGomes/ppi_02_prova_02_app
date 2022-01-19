import React from 'react';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import { LoginScreen } from './screens/login';


export default function App() {
  return (
    <PaperProvider>
      <LoginScreen/>
    </PaperProvider>
  );
};

