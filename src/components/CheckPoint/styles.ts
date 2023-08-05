import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  active: {
    position: "absolute",
    backgroundColor: "#fff",
    width: 100,
    padding: 4,
    zIndex: 2000,

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,

    top: -20,

    textAlign: "center",

    borderColor: "#E5E5E5",
    borderWidth: 4,
  },

  medalStyle: {
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    borderBottomEndRadius: 28,
    borderBottomStartRadius: 28,
    borderBottomWidth: 8,
  },
});
