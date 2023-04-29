import { StyleSheet } from "react-native";
import { styles as surfaceStyle } from "./surface";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  surface: {
    ...surfaceStyle.surface,
    flex: 1,
  },
  amountValue: {
    fontSize: 22,
  },
  label: {
    fontSize: 16,
  },
});
