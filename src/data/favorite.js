import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { JumpingTransition } from "react-native-reanimated";

const FAVORITE_STORAGE = "favorites";

export async function getCharactersFavoriteApi() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return JSON.parse(response || []);
  } catch (error) {
    throw error;
  }
}

export async function addCharacterFavoriteApi(id) {
  try {
    const favorites = await getCharactersFavoriteApi();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}
