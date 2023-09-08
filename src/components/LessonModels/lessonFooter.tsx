import { useClassStore } from "@/store";
import React from "react";
import { Box, Button, Text } from "../UI";

type LessonFooter = {
  correct?: boolean;
  incorrect?: boolean;
  handleIncorrect?: Function;
};

export function LessonFooter({
  correct,
  incorrect,
  handleIncorrect = () => {},
}: LessonFooter) {
  const { increaseScreen } = useClassStore((state) => state);

  return (
    <>
      {correct && (
        <Box
          bg="greenLight"
          flex={1}
          maxHeight={150}
          m="md"
          p="lg"
          justifyContent="space-between"
          borderRadius="md"
          minWidth={360}
        >
          <Text fontWeight="900" color="greenSection" fontSize={22}>
            Você esta indo muito bem!!
          </Text>

          <Button
            variant="green"
            label={"Proxima Lição"}
            textProps={{ variant: "buttonLabel" }}
            onPress={() => increaseScreen()}
          />
        </Box>
      )}
      {incorrect && (
        <Box
          bg="errorSection"
          flex={1}
          maxHeight={150}
          m="md"
          p="lg"
          justifyContent="space-between"
          borderRadius="md"
        >
          <Text fontWeight="900" color="errorText" fontSize={22}>
            Ops! Você errou! Tente novamente!
          </Text>

          <Button
            variant="error"
            label={"Tentar novamente"}
            textProps={{ variant: "buttonLabel" }}
            onPress={() => handleIncorrect()}
          />
        </Box>
      )}
    </>
  );
}
