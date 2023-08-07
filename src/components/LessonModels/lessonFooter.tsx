import { useRouter } from "expo-router";
import React from "react";
import { Box, Button, Text } from "../UI";

type LessonFooter = {
  correct: boolean;
  incorrect: boolean;
  nextLesson?: string;
  handleIncorrect: Function;
};

export function LessonFooter({
  correct,
  incorrect,
  nextLesson,
  handleIncorrect,
}: LessonFooter) {
  const router = useRouter();

  const handleNextLesson = () => {
    if (nextLesson) {
      router.replace(nextLesson);
    } else {
      router.replace("/learn");
    }
  };

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
        >
          <Text fontWeight="900" color="greenSection" fontSize={22}>
            {nextLesson
              ? "Parabéns! Você acertou!"
              : "Parabéns! Você terminou o módulo!"}
          </Text>

          <Button
            variant="green"
            label={nextLesson ? "Proxima Lição" : "Voltar para as Lições"}
            textProps={{ variant: "buttonLabel" }}
            onPress={() => handleNextLesson()}
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
