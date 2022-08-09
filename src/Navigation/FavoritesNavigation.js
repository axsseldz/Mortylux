import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Favorites from '../screens/Favorites';
import Character from "../screens/Character";

const Stack = createStackNavigator();

export default function FavoritesNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen
        name="Character"
        component={Character}
        options={{
          title: "",
          headerTransparent: true

        }}
      />
    </Stack.Navigator>
  )
} 