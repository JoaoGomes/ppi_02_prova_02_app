import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { loginStyle } from '../components/login.style';

export const LoginScreen = () => {

    return (
        <SafeAreaView style={loginStyle.content}>
            <View style={loginStyle.view}>
            <Card>
                <Card.Title title="Cooperativa Santa Clara" titleStyle={loginStyle.cardTitle}></Card.Title>
                <Card.Content>
                    <TextInput label="Email" keyboardType="email-address"></TextInput>
                    <TextInput label="Senha" secureTextEntry={true}></TextInput>
                    <Button mode="contained">Login</Button>
                    <Button>Cadastrar</Button>
                    <Button uppercase={false}> Esqueceu senha</Button>
                </Card.Content>
            </Card>
            </View>
        </SafeAreaView>
    );
}