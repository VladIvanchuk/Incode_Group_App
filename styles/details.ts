import { StyleSheet } from "react-native";
import { styles as surfaceStyle } from "./surface";

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: 50,
    margin: 20,
    flex: 1,
  },
  surface: surfaceStyle.surface,
  item: {
    marginBottom: 10,
  },
});
