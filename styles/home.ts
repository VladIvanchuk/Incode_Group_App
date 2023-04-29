import { StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

export const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 10,
  },
  headerText: {
    fontSize: 22,
  },
  tableWrapper: {
    marginTop: 10,
    flexDirection: "row",
  },
  button: {
    borderRadius: 4,
    borderColor: COLORS.primary,
  },
});
