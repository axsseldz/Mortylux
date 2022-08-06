import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';

export default function Card(props) {
  const { character } = props;

  const POKEMON_TYPE_COLORS = {
    normal: "#A8A878",
    fighting: "#C03028",
    flying: "#A890F0",
    poison: "#A040A0",
    ground: "#E0C068",
    rock: "#B8A038",
    bug: "#A8B820",
    ghost: "#705898",
    steel: "#B8B8D0",
    fire: "#FA6C6C",
    water: "#6890F0",
    grass: "#48CFB2",
    electric: "#FFCE4B",
    psychic: "#F85888",
    ice: "#98D8D8",
    dragon: "#7038F8",
    dark: "#705848",
    fairy: "#EE99AC",
  };

  const CharacterColor = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()]

  const Color = CharacterColor(character.type);

  const background = { backgroundColor: Color, ...styles.backgroundStyles };

  const goToTheCharacter = () => {
    console.log(`go to the character ${character.name}`)

  }

  return (
    <View>
      <TouchableWithoutFeedback onPress={goToTheCharacter}>
        <View style={styles.card}>
          <View style={styles.spacing}>
            <View style={background}>
              <Text style={styles.number}>#{character.order}</Text>
              <Text style={styles.name}>{character.name}</Text>
              <Image source={{ uri: character.image }} style={styles.image} />
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
  backgroundStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,

  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  }
});
