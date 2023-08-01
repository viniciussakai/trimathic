import { StyleSheet } from "react-native";

type StyleProps = {
  direction: "left" | "right";
};

export const generateStyles = ({ direction }: StyleProps) => {
  return StyleSheet.create({
    outerCircle: {
      justifyContent: "center",
      alignItems: "center",
    },
    innerCircle: {
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
    },
    leftWrap: {
      position: "absolute",
      top: 0,
      [`${direction}`]: 0,
    },
    halfCircle: {
      position: "absolute",
      top: 0,
      left: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  });
};
