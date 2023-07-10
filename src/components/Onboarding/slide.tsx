import React from "react";
import { useWindowDimensions } from "react-native";

import { Box, Text } from "../UI";

interface SlidesItemProps {
  item: {
    id: string;
    title: string;
    paragraph: string;
  };
}
export const SlideItem = ({ item }: SlidesItemProps) => {
  const { width } = useWindowDimensions();

  return (
    <Box
      width={width}
      backgroundColor="cardPrimaryBackground"
      padding={"xl"}
      justifyContent="center"
    >
      <Text variant="heading" textAlign="center" marginBottom={"md"}>
        {item.title}
      </Text>
      <Text variant="paragraphWhite" textAlign="center">
        {item.paragraph}
      </Text>
    </Box>
  );
};
