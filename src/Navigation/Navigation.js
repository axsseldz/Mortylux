import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}