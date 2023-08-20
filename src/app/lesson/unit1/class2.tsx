import { useRouter } from "expo-router";
import { useState } from "react";

import { LessonExplanatory } from "@/components/LessonModels/LessonExplanatory";
import { LessonHeader } from "@/components/LessonModels/lessonHeader";
import { Box, Button, Image, Text } from "@/components/UI";

import Equation2_1 from "@/assets/images/lessons/equation2-1.png";
import Explication2_1 from "@/assets/images/lessons/explanation2-1.png";
import Retangle from "@/assets/images/lessons/retangle.png";
import { LessonDragModel } from "@/components/LessonModels";

export default function class2() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  const handleNextLesson = () => {
    const hasNextLesson = activeScreen + 1 < screens.length;

    if (hasNextLesson) {
      setActiveScreen(activeScreen + 1);
      setProgress(((activeScreen + 1) * 100) / screens.length);
      return;
    }

    setProgress(100);
    router.replace("/learn");
    return;
  };

  const screens = [
    LessonDragModel({
      title: "Arraste as palavras para os locais corretos",
      answer: ["Altura", "Base", "Area"],
      questionOptions: ["Altura", "Base", "Area"],
      image: Retangle,
      questionBoxes: [
        {
          x: -30,
          y: 175,
          rotation: -90,
        },
        {
          x: 95,
          y: 360,
          rotation: 0,
        },
        {
          x: 95,
          y: 180,
          rotation: 0,
        },
      ],
      nextLesson: "/lesson/unit1/class3",
      handleNextLesson,
    }),

    LessonExplanatory({
      children: (
        <>
          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Observe o desenho a seguir:
          </Text>
          <Image source={Explication2_1} maxHeight={300} resizeMode="contain" />
          <Text fontSize={18} fontWeight="900" my="xxl" textAlign="center">
            Observe abaixo a equação que representa a demonstração a cima.
          </Text>
          <Image source={Equation2_1} maxHeight={80} resizeMode="contain" />

          <Box
            bg="greenLight"
            p="lg"
            mb="xxl"
            minHeight={150}
            justifyContent="space-between"
            borderRadius="md"
          >
            <Text fontWeight="900" color="greenSection" fontSize={22}>
              "Parabéns! Você terminou o módulo!
            </Text>

            <Button
              variant="green"
              label={"Voltar para as Lições"}
              textProps={{ variant: "buttonLabel" }}
              onPress={() => handleNextLesson()}
              marginBottom="md"
            />
          </Box>
        </>
      ),
    }),
  ];

  return (
    <Box flex={1} alignItems="center" pt="xxl">
      <LessonHeader progress={progress} />
      {screens[activeScreen]}
    </Box>
  );
}
