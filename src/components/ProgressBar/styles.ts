import theme from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 10,
    backgroundColor: "#ccc",
    borderRadius: 10,
    margin: 10,
  },
  bar: {
    height: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
  },
});
