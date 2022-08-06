import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { map } from "lodash";

export default function Kind(props) {
  const { types } = props;

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

  const CharacterColor = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];

  console.log(types);
  return (
    <View style={styles.content}>
      {map(types, (item, index) => (
        <View key={index} style={{ ...styles.bar, backgroundColor: CharacterColor(item.type.name) }}>
          <Text>{item.type.name}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginTop: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bar: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
    backgroundColor: "red",
  },
});