import React from "react";
import { Box, Button, Row, Text } from "@/components/UI";

type Props = {
  title: string;
  description: string;
  bgColor?: string;
};

export const UnitTitle = ({
  title,
  description,
  bgColor = "greenSection",
}: Props) => {
  return (
    <Row
      bg={bgColor as any}
      padding="md"
      margin="sm"
      marginBottom="xl"
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
