import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Input, Text } from 'react-native-elements';

export default function App() {

  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  
  return (
    <View style={styles.container}>
      <Text style={{color: '#888', fontSize: 18}}> 
        Aplicativo da Cooperativa Santa Clara
      </Text>

      <Input 
        placeholder = "E-mail" 
        keyboardType="email-address" 
        onChangeText={value => setEmail(value)}/>

      <Input 
        placeholder = "Senha" 
        secureTextEntry={true}
        onChangeText={value => setSenha(value)}/>

      <TouchableOpacity
        onPress={() => alert('Em construção')}
        style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0000ffaa',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }, 
});