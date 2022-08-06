import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

export default function Card(props) {
  const { character } = props;

  const goToTheCharacter = () => {
    console.log(`go to the character ${character.name}`)

  }

  return (
    <View>
      <TouchableWithoutFeedback onPress={goToTheCharacter}>
        <View style={styles.card}>
          <View style={styles.spacing}>
            <View style={styles.background}>
              <Text style={styles.number}>#{character.order}</Text>
              <Text style={styles.name}>{character.name}</Text>
              <Image source={{ uri: character.imagen }} style={styles.image} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
    width: 190,
  },
  background: {
    backgroundColor: "grey",
  },
  image: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 100,
    height: 100,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  }
});
