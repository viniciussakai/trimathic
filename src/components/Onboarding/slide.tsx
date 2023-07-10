import React from "react";
import { View, useWindowDimensions } from "react-native";

import { Box, Heading, Text } from "../UI";

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
    <Box width={width} bg={"primary.500"} px={6} justifyContent="center">
      <Heading fontSize="dsm" color="neutral.50" mb={3}>
        {item.title}
      </Heading>
      <Text color="neutral.300" textAlign="center">
        {item.paragraph}
      </Text>
    </Box>
  );
};
