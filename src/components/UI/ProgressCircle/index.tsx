import React from "react";

import { View, I18nManager, StyleProp, ViewStyle } from "react-native";
import { computeDerivedState } from "./utils";
import { generateStyles } from "./styles";

const defaultDirection = I18nManager.isRTL ? "right" : "left";

type ProgressProps = {
  color?: string;
  shadowColor?: string;
  bgColor?: string;
  radius: number;
  borderWidth?: number;
  direction?: "left" | "right";
  percent: number;
  children?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  outerCircleStyle?: StyleProp<ViewStyle>;
};

export const ProgressCircle = ({
  color = "#f00",
  shadowColor = "#999",
  bgColor = "#e9e9ef",
  borderWidth = 2,
  radius,
  percent,
  direction = defaultDirection,
  children,
  containerStyle,
  outerCircleStyle,
}: ProgressProps) => {
  const newDirection = direction || "left";

  const styles = generateStyles({ direction });
  const { halfCircle1Degree, halfCircle2Degree, halfCircle2Styles } =
    computeDerivedState({ rootPercent: percent, color, shadowColor });

  const renderHalfCircle = ({ rotateDegrees, halfCircleStyles }: any) => {
    return (
      <View
        style={[
          styles.leftWrap,
          {
            width: radius,
            height: radius * 2,
          },
        ]}
      >
        <View
          style={[
            styles.halfCircle,
            {
              width: radius,
              height: radius * 2,
              borderRadius: radius,
              overflow: "hidden",
              transform: [
                { translateX: radius / 2 },
                { rotate: rotateDegrees + "deg" },
                { translateX: -radius / 2 },
              ],
              backgroundColor: color,
              ...halfCircleStyles,
            },
          ]}
        />
      </View>
    );
  };

  const renderInnerCircle = () => {
    const radiusMinusBorder = radius - borderWidth;
    return (
      <View
        style={[
          styles.innerCircle,
          {
            width: radiusMinusBorder * 2,
            height: radiusMinusBorder * 2,
            borderRadius: radiusMinusBorder,
            backgroundColor: bgColor,
            ...containerStyle,
          },
        ]}
      >
        {children}
      </View>
    );
  };

  return (
    <View
      style={[
        styles.outerCircle,
        {
          width: radius * 2,
          height: radius * 2,
          borderRadius: radius,
          backgroundColor: shadowColor,
          ...outerCircleStyle,
        },
      ]}
    >
      {renderHalfCircle({ rotateDegrees: halfCircle1Degree })}
      {renderHalfCircle({
        rotateDegrees: halfCircle2Degree,
        halfCircleStyles: halfCircle2Styles,
      })}
      {renderInnerCircle()}
    </View>
  );
};
