import { LessonExplanatory } from "@/components/LessonModels/LessonExplanatory";
import { LessonHeader } from "@/components/LessonModels/lessonHeader";
import { Box, Image, Text } from "@/components/UI";

import { LessonQuiz, Recomendation } from "@/components/LessonModels";
import { useScreens } from "@/hooks/useScreens";

export default function relacoes_trigonometricas() {
  const screens = [
    LessonExplanatory({
      children: (
        <>
          <Text fontSize={18} fontWeight="900" mb="sm" textAlign="center">
            Antes, uma pequena revisão...
          </Text>
          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            No triângulo retângulo temos as seguintes relações trigonométricas.
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula8/triangulo_relacao_trigonometricas_ex1.png")}
            maxHeight={300}
            resizeMode="contain"
            marginVertical="md"
          />

          <Image
            source={require("@/assets/images/lessons/aula8/formula_seno_ex1.png")}
            maxHeight={300}
            resizeMode="contain"
            marginVertical="md"
          />

          <Image
            source={require("@/assets/images/lessons/aula8/formula_cosseno_ex1.png")}
            maxHeight={300}
            resizeMode="contain"
            marginVertical="md"
          />

          <Image
            source={require("@/assets/images/lessons/aula8/formula_tangente_ex1.png")}
            maxHeight={300}
            resizeMode="contain"
            marginVertical="md"
          />

          <Image
            source={require("@/assets/images/lessons/aula8/tabela_relacao_trigometricas_ex1.png")}
            maxHeight={300}
            resizeMode="contain"
            marginVertical="md"
          />
        </>
      ),
    }),

    Recomendation(),
    LessonQuiz({
      title:
        "Determine o valor de x no triângulo a seguir. Considere sen 37º = 0,60, cosseno de 37º = 0,79 e tan 37º = 0,75.",
      image: require("@/assets/images/lessons/aula8/triangulo_exercicio1.png"),
      answer: "13,4m",
      questionOptions: ["13,4m", "10,2m", "13m²"],
    }),
    LessonQuiz({
      title: "Determine o valor de x na figura abaixo.",
      image: require("@/assets/images/lessons/aula8/triangulo_execicio2.png"),
      answer: "7,071cm",
      questionOptions: ["12cm", "7,071cm", "7cm"],
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
