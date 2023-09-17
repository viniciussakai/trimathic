import { LessonExplanatory } from "@/components/LessonModels/LessonExplanatory";
import { LessonHeader } from "@/components/LessonModels/lessonHeader";
import { Box, Image, Text } from "@/components/UI";

import { LessonQuiz, Recomendation } from "@/components/LessonModels";
import { useScreens } from "@/hooks/useScreens";

export default function quadrantes() {
  const screens = [
    LessonExplanatory({
      children: (
        <>
          <Text
            fontSize={18}
            fontWeight="900"
            marginVertical="lg"
            textAlign="center"
          >
            No exemplo abaixo temos um circulo de raio 1.
          </Text>

          <Text fontSize={18} fontWeight="900" mb="sm" textAlign="center">
            Ao o dividirmos em quatro partes iguais, encontramos os chamados
            quadrantes.
          </Text>

          <Text fontSize={18} fontWeight="900" mb="sm" textAlign="center">
            Vamos enumera-los no sentido anti-horário, partindo do ponto inicial
            O.
          </Text>

          <Text fontSize={18} fontWeight="900" mb="sm" textAlign="center">
            Adotando o sentido anti-horário como positivo.
          </Text>
          <Text fontSize={18} fontWeight="900" mb="xs" textAlign="center">
            E o sentido horário como negativo.
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula10/cicunferencia_quadrante_ex1.png")}
            maxHeight={300}
            resizeMode="contain"
            marginVertical="lg"
          />

          <Text fontSize={18} fontWeight="900" mb="lg" textAlign="center">
            Nos exemplos abaixo veremos alguns arcos e quais quadrantes
            pertencem.
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula10/circuferencia_quadrante_ex2.png")}
            maxHeight={300}
            resizeMode="contain"
          />

          <Text
            fontSize={18}
            fontWeight="900"
            textAlign="center"
            color="blueSection"
          >
            X pertence ao 1° quadrante
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula10/circuferencia_quadrante_ex3.png")}
            maxHeight={300}
            resizeMode="contain"
            mt="xl"
          />

          <Text
            fontSize={18}
            fontWeight="900"
            textAlign="center"
            color="blueSection"
          >
            X pertence ao 2° quadrante
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula10/circuferencia_quadrante_ex4.png")}
            maxHeight={300}
            resizeMode="contain"
            mt="xl"
          />

          <Text
            fontSize={18}
            fontWeight="900"
            textAlign="center"
            color="blueSection"
          >
            X pertence ao 3° quadrante
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula10/circuferencia_quadrante_ex5.png")}
            maxHeight={300}
            resizeMode="contain"
            mt="xl"
          />

          <Text
            fontSize={18}
            fontWeight="900"
            textAlign="center"
            color="blueSection"
          >
            X pertence ao 4° quadrante
          </Text>
        </>
      ),
    }),

    Recomendation(),
    LessonQuiz({
      title:
        "1. Determine em qual quadrante se localiza o ponto final do arco de 45º",
      image: require("@/assets/images/lessons/aula10/circuferencia_quadrante_exercicio.png"),
      answer: "1º Quadrante",
      questionOptions: ["3º Quadrante", "1º Quadrante", "4º Quadrante"],
    }),
    LessonQuiz({
      title:
        "2. Determine em qual quadrante se localiza o ponto final do arco de 405º",
      image: require("@/assets/images/lessons/aula10/circuferencia_quadrante_exercicio.png"),
      answer: "1º Quadrante",
      questionOptions: ["1º Quadrante", "3º Quadrante", "4º Quadrante"],
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
