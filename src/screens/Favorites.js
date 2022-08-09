import React, { useState, useCallback } from "react";
import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import { getCharactersFavoriteApi } from "../data/favorite";
import CharacterList from "../components/CharacterList";

export default function Favorite() {
  const [characters, setCharacters] = useState([]);
  const { auth } = useAuth();


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

  useFocusEffect(

    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getCharactersFavoriteApi();

          const charactersArray = [];
          for await (const id of response) {
            const characterDetails = await getCharactersDetailsApi(id);

            charactersArray.push({
              id: characterDetails.id,
              name: characterDetails.name,
              type: characterDetails.types[0].type.name,
              order: characterDetails.order,
              image:
                characterDetails.sprites.other["official-artwork"].front_default,
            });
          }
          setCharacters(charactersArray);
        })()
      }
    }, [auth])
  )



  return !auth ? (
    <Text>usuario no logeado</Text>
  ) : (
    <CharacterList characters={characters} />
  );
}