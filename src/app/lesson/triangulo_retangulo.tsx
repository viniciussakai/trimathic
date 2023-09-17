import { LessonExplanatory } from "@/components/LessonModels/LessonExplanatory";
import { LessonHeader } from "@/components/LessonModels/lessonHeader";
import { Box, Image, Text } from "@/components/UI";

import {
  LessonDragModel,
  LessonQuiz,
  Recomendation,
} from "@/components/LessonModels";
import { useScreens } from "@/hooks/useScreens";

export default function triangulo_retangulo() {
  const screens = [
    LessonExplanatory({
      children: (
        <>
          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Observe essa figura geometrica:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula5/triangulo_ret_ex1.png")}
            maxHeight={300}
            resizeMode="contain"
          />

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            O que você acaba de ver é um triângulo retângulo. Essa forma
            geométrica é formada por um ângulo interno de 90°, chamado de ângulo
            reto.
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula5/triangulo_ret_ex2.png")}
            maxHeight={300}
            resizeMode="contain"
            mb="sm"
          />

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Este triângulo apresenta 3 ângulos:
          </Text>

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            O representado no vértice A ( 90°) - oposto à ele, temos o lado a,
            também conhecida como <Text color="primary"> HIPOTENUSA</Text>
          </Text>

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            O representado no vértice B ( 45°) - oposto à ele e adjacente a
            hipotenusa, temos o lado b, também conhecido como
            <Text color="primary"> CATETO ADJACENTE</Text>
          </Text>

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            O representado no vértice C ( 45°) - oposto à ele e oposto a
            hipotenusa, temos o lado c, também conhecido como
            <Text color="primary"> CATETO OPOSTO</Text>
          </Text>
        </>
      ),
    }),
    LessonDragModel({
      title: "Arraste as palavras para os locais corretos",
      answer: ["Cateto Oposto", "Hipotenusa", "Cateto Adjacente"],
      questionOptions: ["Cateto Oposto", "Hipotenusa", "Cateto Adjacente"],
      image: require("@/assets/images/lessons/aula5/triangulo_ret_ex2.png"),
      questionBoxes: [
        {
          x: 30,
          y: 155,
          rotation: -47,
        },
        {
          x: 150,
          y: 280,
          rotation: 0,
        },
        {
          x: 235,
          y: 155,
          rotation: 40,
        },
      ],
    }),

    LessonExplanatory({
      children: (
        <>
          <Text fontSize={28} fontWeight="900" mb="xxl" textAlign="center">
            Teorema de Pitágoras
          </Text>

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Observe a figura abaixo:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula5/teorema_pitagoras_ex1.png")}
            maxHeight={500}
            resizeMode="contain"
          />

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Quando as medidas dos lados de um triângulo retângulo são números
            inteiros positivos, o triângulo é chamado de triângulo pitagórico.
          </Text>

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Neste caso, os catetos e a hipotenusa são denominados de “terno
            pitagórico” ou “trio pitagórico”.
          </Text>

          <Text fontSize={18} fontWeight="900" textAlign="center">
            Para verificar se três números formam um trio pitagórico, usamos a
            relação:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula5/formula_teorema_pitagoras_ex1.png")}
            maxHeight={300}
            resizeMode="contain"
            my="lg"
          />

          <Text fontSize={18} fontWeight="900" textAlign="center">
            Exemplo:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula5/teorema_pitagoras_ex2.png")}
            maxHeight={500}
            resizeMode="contain"
          />
          <Text fontSize={18} fontWeight="900" textAlign="center">
            Aplicando a formula
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula5/formula_teorema_pitagoras_ex1.png")}
            maxHeight={300}
            resizeMode="contain"
            my="lg"
          />

          <Image
            source={require("@/assets/images/lessons/aula5/formula_teorema_pitagoras_ex2.png")}
            maxHeight={300}
            resizeMode="contain"
            my="lg"
          />

          <Image
            source={require("@/assets/images/lessons/aula5/formula_teorema_pitagoras_ex3.png")}
            maxHeight={300}
            resizeMode="contain"
            my="lg"
          />
        </>
      ),
    }),
    Recomendation(),
    LessonQuiz({
      title: "Descubra o valor x, e assinale a alternativa correta:",
      image: require("@/assets/images/lessons/aula5/teorema_pitagoras_exercicio.png"),
      answer: "129",
      questionOptions: ["169", "159", "129"],
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
