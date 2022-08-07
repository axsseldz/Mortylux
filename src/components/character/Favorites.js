import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { addCharacterFavoriteApi, } from "../../data/favorite";

export default function Favorites(props) {
  const { id } = props;

  const addFavorites = async () => {
    await addCharacterFavoriteApi(id);
  };

  return (

    <Icon
      name="heart"
      color="#35363a"
      size={20}
      onPress={addFavorites}
      style={{ marginRight: 20 }}
    />

  )
}