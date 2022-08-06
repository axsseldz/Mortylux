import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Card from './Card';

export default function CharacterList(props) {
  const { characters } = props;
  return (
    <View>
      <FlatList
        data={characters}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(character) => String(character.id)}
        renderItem={({ item }) => <Card character={item} />}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});