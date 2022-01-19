import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';

export const Custo = () => {

    return (
        <SafeAreaView>
            <ScrollView>
                <Appbar>
                    <Appbar.BackAction />
                    <Appbar.Content title="Registrar custo"/>
                </Appbar>
                <TextInput label="Nome"/>
                <TextInput label="Valor"/>
                <TextInput label="Status"/>
                <Button mode="contained">Registrar</Button>
            </ScrollView>
        </SafeAreaView>
    )
}