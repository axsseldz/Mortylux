import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function NotLogged() {
  const navigation = useNavigation();

  return (

    <View style={styles.content}>
      <Text style={styles.text}>If you want to see this section you have to log in</Text>
      <Button title='go to Log In' onPress={() => navigation.navigate("Profile")} />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
});