import React from 'react';
import { View, Text } from 'react-native';

export default function Character(props) {
  const { navigation, route } = props;
  console.log(route);
  return (
    <View>
      <Text>this is a Character</Text>
    </View>
  )
}