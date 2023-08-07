import React from "react";

import { StyleProp, View, ViewStyle } from "react-native";

import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { styles } from "./styles";

export const ProgressBar = (props: {
  progress: number;
  style?: StyleProp<ViewStyle>;
}) => {
  const progressEffect = useAnimatedStyle(() => {
    return {
      width: withTiming(props.progress, {
        duration: 500,
        easing: Easing.out(Easing.exp),
      }),
    };
  });

  return (
    <View style={[styles.container, props.style]}>
      <Animated.View style={[styles.bar, progressEffect]} />
    </View>
  );
};
