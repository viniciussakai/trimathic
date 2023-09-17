import { LessonExplanatory } from "@/components/LessonModels/LessonExplanatory";
import { LessonHeader } from "@/components/LessonModels/lessonHeader";
import { Box, Image, Text } from "@/components/UI";

import { LessonQuiz, Recomendation } from "@/components/LessonModels";
import { useScreens } from "@/hooks/useScreens";

export default function circulo_trigonometrico() {
  const screens = [
    LessonExplanatory({
      children: (
        <>
          <Text fontSize={18} fontWeight="900" mb="sm" textAlign="center">
            Observe o circulo trigonométrico:.
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula13/circuferencia_Tgx_ex1.png")}
            maxHeight={300}
            resizeMode="contain"
            marginVertical="md"
          />

          <Text fontSize={18} fontWeight="900" mb="sm" textAlign="center">
            Veja que temos apresentado no círculo o eixo dos cossenos, o eixo
            dos senos e o eixo das tangentes.
          </Text>
          <Image
            source={require("@/assets/images/lessons/aula13/circuferencia_Tgx_ex2.png")}
            maxHeight={300}
            resizeMode="contain"
            marginVertical="md"
          />

          <Text fontSize={18} fontWeight="900" mb="sm" textAlign="center">
            Tomando um arco de comprimento X, teremos projetado o senX, cosX e
            tgX
          </Text>
          <Text fontSize={18} fontWeight="900" mb="sm" textAlign="center">
            E nesse momento acontece algo interresante na figura percebemos que
            à dois triangulos retangulos, com um angulo comum aos dois e dois
            angulos semelhantes, fazendo os dois triangulos serem proporcionais.
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula13/circuferencia_Tgx_ex3.png")}
            maxHeight={300}
            resizeMode="contain"
            marginVertical="md"
          />

          <Text fontSize={18} fontWeight="900" mb="sm" textAlign="center">
            Dizemos então que no triângulo grande, que tgX, que um cateto na
            figura, está para o tamanho do raio da circunferencia 1, assim como
            no triângulo menor, o senX está para o cosX.
          </Text>

          <Text fontSize={18} fontWeight="900" mb="sm" textAlign="center">
            Deduzindo isto chegamos a fórmula:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula13/formula_tgx.png")}
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
        "Determine qual o valor da TgX, tomando que o valor de SenX = 0,8 e CosX = 0,2.",
      image: require("@/assets/images/lessons/aula13/circuferencia_Tgx_exercicio.png"),
      answer: "4",
      questionOptions: ["3", "4", "6"],
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
