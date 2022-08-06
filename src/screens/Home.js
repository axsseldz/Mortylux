import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import CharacterList from "../components/CharacterList";

async function getCharactersApi() {
  try {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getCharactersDetailsByUrlApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      await loadCharacters();
    })();
  }, []);

  const loadCharacters = async () => {
    try {
      const response = await getCharactersApi();

      const charactersArray = [];
      for await (const character of response.results) {
        const characterDetails = await getCharactersDetailsByUrlApi(character.url);

        charactersArray.push({
          id: characterDetails.id,
          name: characterDetails.name,
          type: characterDetails.types[0].type.name,
          order: characterDetails.order,
          image:
            characterDetails.sprites.other["official-artwork"].front_default,
        });
      }

      setCharacters([...characters, ...charactersArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <CharacterList characters={characters} />
    </SafeAreaView>
  );
}