import React from "react";
import { SafeAreaView, Text, Button } from "react-native";
import { getCharactersFavoriteApi } from "../data/favorite";

export default function Favorite() {

  const checkFavorites = async () => {
    const response = await getCharactersFavoriteApi();
    console.log(response);

  }

  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title="Get favorites" onPress={checkFavorites} />
    </SafeAreaView>
  );
}