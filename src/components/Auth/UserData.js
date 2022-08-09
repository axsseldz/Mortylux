import React, { useState, useCallback } from 'react';
import { getCharactersFavoriteApi } from "../../data/favorite";
import { StyleSheet, View, Text, Button } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";
import { size } from "lodash";
import useAuth from "../../hooks/useAuth";


export default function UserData() {
  const { auth, logout } = useAuth();
  const [total, setTotal] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getCharactersFavoriteApi();
          setTotal(size(response));
        } catch (error) {
          setTotal(0);
        }
      })();
    }, [])
  );


  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Welcome,</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Name" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Username" text={`${auth.username}`} />
        <ItemMenu title="Email" text={`${auth.email}`} />
        <ItemMenu title="Favorites" text={`${total} pokemons`} />
      </View>
      <Button title="Log out" onPress={logout} style={styles.btnLogoun} />
    </View>
  )
}

function ItemMenu(props) {
  const { title, text } = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  btnLogoun: {
    paddingTop: 20,
  },
});