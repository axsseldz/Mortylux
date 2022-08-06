import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export default function Character(props) {

  async function getCharactersDetailsApi(id) {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }

  const {
    navigation,
    route: { params },
  } = props;
  const [character, setCharacter] = useState(null);
  console.log(params.id);

  useEffect(() => {
    (async () => {
      try {
        const response = await getCharactersDetailsApi(params.id);
        setCharacter(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!character) return null;

  return (
    <View>
      <Text>this is a Character</Text>
      <Text>{character.name}</Text>
    </View>
  )
}