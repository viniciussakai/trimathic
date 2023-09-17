import { LessonExplanatory } from "@/components/LessonModels/LessonExplanatory";
import { LessonHeader } from "@/components/LessonModels/lessonHeader";
import { Box, Image, Text } from "@/components/UI";

import {
  LessonDragModel,
  LessonQuiz,
  Recomendation,
} from "@/components/LessonModels";
import { useScreens } from "@/hooks/useScreens";

export default function grau() {
  const screens = [
    LessonExplanatory({
      children: (
        <>
          <Text fontSize={28} fontWeight="900" mb="sm" textAlign="center">
            Arco de Circunferência
          </Text>
          <Text
            fontSize={18}
            fontWeight="900"
            marginVertical="lg"
            textAlign="center"
          >
            Os pontos A e B determinam um arco (AB) na circunferência.
          </Text>

          <Text fontSize={18} fontWeight="900" mb="xs" textAlign="center">
            Arcos são uma parte de um círculo.
          </Text>

          <Text fontSize={18} fontWeight="900" mb="xs" textAlign="center">
            Todo arco, determina um ângulo central.
          </Text>

          <Text fontSize={18} fontWeight="900" mb="lg" textAlign="center">
            AB determina o ângulo AÔB.
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula9/circuferencia_ex1.png")}
            maxHeight={300}
            resizeMode="contain"
            marginVertical="lg"
          />

          <Text fontSize={18} fontWeight="900" mb="lg" textAlign="center">
            A medida de um arco corresponde de seu ângulo central ou sua medida
            angular.
          </Text>

          <Text fontSize={18} fontWeight="900" mb="lg" textAlign="center">
            Já o comprimento se refere a medida linear desse arco.
          </Text>

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            No exemplo abaixo vemos que a medida angular dos dois círculos é
            igual, porém a medida linear é diferente.
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula9/circuferencia_ex2.png")}
            maxHeight={300}
            resizeMode="contain"
            marginVertical="lg"
          />
        </>
      ),
    }),
    LessonExplanatory({
      children: (
        <>
          <Text
            fontSize={28}
            fontWeight="900"
            mt="xl"
            mb="sm"
            textAlign="center"
          >
            Grau
          </Text>
          <Text
            fontSize={18}
            fontWeight="900"
            marginVertical="md"
            textAlign="center"
          >
            Grau: é uma medida, em que a circunferência é divida em 360 partes
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula9/circuferencia_ex3.png")}
            maxHeight={300}
            resizeMode="contain"
            marginVertical="lg"
          />

          <Text fontSize={18} fontWeight="900" mb="md" textAlign="center">
            Existem alguns submúltiplos do grau
          </Text>

          <Text fontSize={22} fontWeight="900" mb="xs" textAlign="center">
            Minuto: 1º = 60’
          </Text>

          <Text fontSize={22} fontWeight="900" mb="lg" textAlign="center">
            Segundo: 1’ = 60’’
          </Text>

          <Text fontSize={20} fontWeight="900" mb="md" textAlign="center">
            Radiano: 1 rad é a media de um arco cujo comprimento é igual o raio.
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula9/circuferencia_ex4.png")}
            maxHeight={300}
            resizeMode="contain"
            marginVertical="lg"
          />

          <Text fontSize={20} fontWeight="900" mb="md" textAlign="center">
            Percebemos que no ângulo de 180º “cabem” aproximadamente 3,14
            radianos. Logo:
          </Text>
        </>
      ),
    }),

    Recomendation(),
    LessonDragModel({
      title: "Arraste as palavras para os locais corretos",
      answer: ["45°", "180°", "30°", "360°", "90°"],
      questionOptions: ["360°", "180°", "90°", "30°", "45°"],
      image: require("@/assets/images/lessons/aula9/exercicio.png"),
      questionBoxes: [
        { x: 250, y: 70, rotation: 0 },
        { x: 250, y: 125, rotation: 0 },
        { x: 250, y: 180, rotation: 0 },
        { x: 250, y: 235, rotation: 0 },
        { x: 250, y: 290, rotation: 0 },
      ],
    }),
    LessonQuiz({
      title: "2. Converta o ângulo 120º em graus, para radianos.",
      image: require("@/assets/images/lessons/aula9/triangulo_exercicio2.png"),
      answer: "2π/3 rad",
      questionOptions: ["π rad", "2π/3 rad", "2π rad"],
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
