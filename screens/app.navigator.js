import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './login';
import { HomeScreen } from './home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
    <NavigationContainer>
        <Navigator headerMode="none" initialRouteName="Login">
            <Screen name="Login" component={LoginScreen}></Screen>
            <Screen name="Home" component={HomeScreen}></Screen>
        </Navigator>
    </NavigationContainer>
}

export default AppNavigator;