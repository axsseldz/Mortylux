import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/character/Header';
import Kind from '../components/character/Kind';
import Stats from '../components/character/Stats';

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

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name='arrow-left'
          color='#fff'
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]);

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
    <ScrollView>
      <Header
        name={character.name}
        order={character.order}
        image={character.sprites.other["official-artwork"].front_default}
        type={character.types[0].type.name}
      />
      <Kind types={character.types} />
      <Stats stats={character.stats} />
    </ScrollView>
  )
}