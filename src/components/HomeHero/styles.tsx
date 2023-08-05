import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    padding: 10,
  },

  image: {
    resizeMode: "contain",
    justifyContent: "center",
    position: "absolute",
    left: 180,
    bottom: -30,
    height: 200,
    width: 300,
  },

  p: {
    width: 280,
    paddingRight: 50,
    lineHeight: 30,
  },
});
