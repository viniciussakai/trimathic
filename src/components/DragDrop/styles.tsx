import { StyleSheet } from "react-native";
import theme from "@/styles/theme";
import { pallete } from "@/styles/pallete";
const colors = theme.colors;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
    alignContent: "center",
    width: "100%",
    justifyContent: "center",
  },

  normalStyle: {
    padding: 10,
    minWidth: 100,
    backgroundColor: colors.primary,
    borderRadius: 5,
  },

  dragging: {
    opacity: 0.3,
    borderStyle: "dashed",
  },

  droppable: {
    padding: 10,

    backgroundColor: pallete.neutral[200],

    borderColor: pallete.neutral[300],
    borderWidth: 1,
    borderStyle: "solid",
  },

  receiving: {
    borderColor: pallete.neutral[300],
    borderWidth: 2,
    borderStyle: "dashed",
  },
});
