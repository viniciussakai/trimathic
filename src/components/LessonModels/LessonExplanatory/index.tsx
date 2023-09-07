import { Box, Button, Column, Text } from "@/components/UI";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

type LessonExplanatoryProps = {
  children: React.ReactNode;
  handleNextLesson: Function;
};

export function LessonExplanatory({
  children,
  handleNextLesson,
}: LessonExplanatoryProps) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <Column p="sm" alignItems="center">
        {children}
        <Box
          bg="greenLight"
          p="lg"
          mb="xxl"
          minHeight={150}
          justifyContent="space-between"
          borderRadius="md"
        >
          <Text fontWeight="900" color="greenSection" fontSize={22}>
            Incrivel, você está indo muito bem.
          </Text>

          <Button
            variant="green"
            label={"Proxima Pagina"}
            textProps={{ variant: "buttonLabel" }}
            onPress={() => handleNextLesson()}
            marginBottom="md"
          />
        </Box>
      </Column>
    </ScrollView>
  );
}
