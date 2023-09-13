import { LessonExplanatory } from "@/components/LessonModels/LessonExplanatory";
import { LessonHeader } from "@/components/LessonModels/lessonHeader";
import { Box, Image, Text } from "@/components/UI";

import {
  LessonDragModel,
  LessonQuiz,
  Recomendation,
} from "@/components/LessonModels";
import { useScreens } from "@/hooks/useScreens";

export default function area_triangulo() {
  const screens = [
    LessonExplanatory({
      children: (
        <>
          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Observe este retangulo:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula3/hollo_retangle.png")}
            maxHeight={300}
            resizeMode="contain"
          />

          <Text fontSize={18} fontWeight="900" my="xxl" textAlign="center">
            Veja que podemos dividi-lo em dois triângulos.
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula3/triangulo_duplo.png")}
            maxHeight={300}
            resizeMode="contain"
            mb="sm"
          />

          <Image
            source={require("@/assets/images/lessons/aula3/triangulo_duplo_fill.png")}
            maxHeight={300}
            resizeMode="contain"
          />

          <Text fontSize={18} fontWeight="900" my="sm" textAlign="center">
            Baseado na formula da área dos retangulos:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula3/equation3-1.png")}
            maxHeight={80}
            resizeMode="contain"
          />
          <Image
            source={require("@/assets/images/lessons/aula3/triangle.png")}
            maxHeight={300}
            resizeMode="contain"
            mb="sm"
          />

          <Text fontSize={18} fontWeight="900" textAlign="center" my="lg">
            Podemos deduzir e utilizar a formula da área de triângulos.
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula3/equation2-1.png")}
            maxHeight={80}
            resizeMode="contain"
          />
        </>
      ),
    }),
    LessonDragModel({
      title: "Arraste as palavras para os locais corretos",
      answer: ["Altura", "Base", "/2"],
      questionOptions: ["Altura", "Base", "/2"],
      image: require("@/assets/images/lessons/aula3/triangulo_retangulo_exercicio.png"),
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
          x: 145,
          y: 180,
          rotation: 60,
        },
      ],
    }),
    Recomendation(),
    LessonQuiz({
      title:
        "Utilizando os conceitos aprendidos na unidade, calcule o valor da Área do triângulo:",
      image: require("@/assets/images/lessons/aula3/triangulo_retangulo_exercicio2.png"),
      answer: "238 cm²",
      questionOptions: ["230,8 cm²", "238 cm²", "231,1 cm²"],
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
