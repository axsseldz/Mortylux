import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { addCharacterFavoriteApi, isCharacterFavoriteApi } from "../../data/favorite";

export default function Favorites(props) {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reload, setReload] = useState(false);
  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  useEffect(() => {
    (async () => {
      try {
        const response = await isCharacterFavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })()
  }, [id, reload])

  const reloadCheckFavorite = () => {
    setReload((prev) => !prev);
  };

  const addFavorites = async () => {
    try {
      await addCharacterFavoriteApi(id);
      reloadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  const removeCharacter = () => {
    console.log("remove from favorites");
  };

  return (
    <Icon
      name="heart"
      color="#35363a"
      size={20}
      onPress={isFavorite ? removeCharacter : addFavorites}
      style={{ marginRight: 20 }}
    />
  )
}