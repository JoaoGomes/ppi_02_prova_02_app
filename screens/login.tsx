import React from 'react';
import { Alert, SafeAreaView } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { loginStyle } from '../components/login.style';

interface LoginScreenProps {
    navigation: any;
}

export const LoginScreen = (props: LoginScreenProps) => {

    const login = () => props.navigation.navigate("Home");

    return (
        <SafeAreaView style={loginStyle.content}>
            <Card>
                <Card.Title title="Cooperativa Santa Clara" titleStyle={loginStyle.cardTitle} ></Card.Title>
                <Card.Content>
                    <TextInput label="Email" keyboardType="email-address"></TextInput>
                    <TextInput label="Senha" secureTextEntry={true}></TextInput>
                    <Button mode="contained" onPress={login}>Login</Button>
                    <Button>Cadastrar</Button>
                    <Button uppercase={false}> Esqueceu senha</Button>
                </Card.Content>
            </Card>
        </SafeAreaView>
    );
}