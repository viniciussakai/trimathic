import { Box, Row, Text } from "@/components/UI";
import React from "react";

type Props = {
  title: string;
  description: string;
  index: number;
};

const Colors: { [key: number]: string } = {
  0: "greenSection",
  1: "redSection",
  2: "blueSection",
  3: "yellowSection",
};

const getBgColor = (index: number) => {
  const selector = (index - 1) % 4;
  return Colors[selector];
};

export const UnitTitle = ({ title, description, index }: Props) => {
  const bgColor = getBgColor(index);

  return (
    <Row
      bg={bgColor as any}
      padding="md"
      margin="sm"
      marginTop="xl"
      borderRadius="md"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Text fontSize={20} fontWeight="bold" color="constrastText">
          {title}
        </Text>
        <Text variant="paragraphWhite" fontSize={12}>
          {description}
        </Text>
      </Box>
    </Row>
  );
};
