import {
  LessonExplanatory,
  LessonQuiz,
  Recomendation,
} from "@/components/LessonModels/";
import { LessonHeader } from "@/components/LessonModels/lessonHeader";
import { Box, Image, Text } from "@/components/UI";

import Equation2_1 from "@/assets/images/lessons/aula2/equation2-1.png";
import Explication2_1 from "@/assets/images/lessons/aula2/explanation2-1.png";
import RetangleQuiz from "@/assets/images/lessons/aula2/retan_exer.png";
import Retangle from "@/assets/images/lessons/aula2/retangle.png";
import { LessonDragModel } from "@/components/LessonModels";
import { useScreens } from "@/hooks/useScreens";

export default function area_retangulo() {
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
        </>
      ),
    }),
    Recomendation(),
    LessonQuiz({
      title:
        "Utilizando os conceitos aprendidos na unidade, calcule o valor da área do retângulo:",
      image: RetangleQuiz,
      answer: "189 cm²",
      questionOptions: ["189 cm²", "198 cm²", "200 cm²"],
    }),
  ];

  const { progress, activeScreen } = useScreens(screens);

  return (
    <Box flex={1} alignItems="center" pt="xxl">
      <LessonHeader progress={progress} />
      {screens[activeScreen]}
    </Box>
  );
}
