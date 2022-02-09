import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { HeaderComponent } from '../components/header.component';
import { Title } from 'react-native-paper';

export const HomeScreen = () => {

    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderComponent title= "Home" />
                <Title>Home</Title>
            </ScrollView>
        </SafeAreaView>
    )
}