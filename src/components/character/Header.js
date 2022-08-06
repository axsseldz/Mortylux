import React from 'react';
import { StyleSheet, View, SafeAreaView, Image, Text } from 'react-native';

export default function Header(props) {
  const { name, order, image, type } = props;

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
  const Color = CharacterColor(type);

  const background = { backgroundColor: Color, ...styles.backgroundStyles };

  return (
    <>
      <View style={background}>
        <SafeAreaView style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.order}>#{`${order}`}</Text>
          </View>
          <View style={styles.contentImage}>
            <Image source={{ url: image }} style={styles.image} />
          </View>
        </SafeAreaView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  backgroundStyles: {
    width: "100%",
    height: 400,
    top: 70,
    borderTopEndRadius: 300,
    borderTopLeftRadius: 300,
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  name: {
    color: "#f0f6f7",
    fontWeight: "bold",
    fontSize: 27,
  },
  order: {
    color: "#f0f6f7",
    fontWeight: "bold",
  },
  contentImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  image: {
    top: 120,
    width: 300,
    height: 300,
  },
});