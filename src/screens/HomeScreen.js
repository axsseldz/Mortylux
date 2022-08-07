import { View, Text, Button, SafeAreaView } from 'react-native';
import React from 'react';

export default function HomeScreen(props) {
    const { navigation } = props;

    const goToSettings = () => {
        navigation.navigate("Settings")
    }

    return (
        <SafeAreaView>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Button onPress={goToSettings} title="Go To Settings" />
        </SafeAreaView>
    )
}