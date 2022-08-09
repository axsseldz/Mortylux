import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home";
import Character from '../screens/Character';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "", headerTransparent: true }} />
      <Stack.Screen
        name="Character"
        component={Character}
        options={{ title: "", headerTransparent: true }} />
    </Stack.Navigator>
  )
}

