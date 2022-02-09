import React, {useState} from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { HeaderComponent } from '../components/header.component';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View } from 'react-native-web';

export const Custo = () => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderComponent title= "Registrar novo custo" />
                <TextInput label="Nome"/>
                <TextInput label="Valor"/>
                <TextInput label="Data"/>
                <TextInput label="Status"/>
                <Button mode="contained">Registrar custo</Button>
            </ScrollView>
        </SafeAreaView>
    )
}