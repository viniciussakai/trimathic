import { LessonExplanatory } from "@/components/LessonModels/LessonExplanatory";
import { LessonHeader } from "@/components/LessonModels/lessonHeader";
import { Box, Image, Text } from "@/components/UI";

import { LessonQuiz, Recomendation } from "@/components/LessonModels";
import { useScreens } from "@/hooks/useScreens";

export default function triangulo_equilatero() {
  const screens = [
    LessonExplanatory({
      children: (
        <>
          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Observe o triângulo equilátero:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula6/triangulo_equilatero_ex1.png")}
            maxHeight={300}
            resizeMode="contain"
          />

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            O triângulo equilátero é um tipo de triângulo que possui os três
            lados com mesma medida representados por L na figura.
          </Text>

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Além dos lados, os ângulos internos também apresentam as mesmas
            medidas, que estão representados pelos 3 ângulos de 60º, os quais
            totalizam 180°.
          </Text>

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Observe essa figura:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula6/triangulo_equilatero_ex2.png")}
            maxHeight={300}
            resizeMode="contain"
            mb="sm"
          />

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Veja que ao fazer uma reta cortando ao meio o ângulo de 60° até a
            base, divindo os dois ao meio (30° e L/2, respectivamente).
          </Text>

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Essa reta representa a altura do triângulo, h na figura. E para
            calcular o valor da altura, usaremos o teorema de pitagorás ( a² =
            b² + c² ).
          </Text>

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Substituindo os valores:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula6/formula_teorema_triangulo_ex1.png")}
            maxHeight={300}
            resizeMode="contain"
          />

          <Image
            source={require("@/assets/images/lessons/aula6/formula_teorema_triangulo_resolução.png")}
            maxHeight={1000}
            resizeMode="contain"
          />

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Com Isso chegaremos na formula da altura
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula6/formula_altura_triangulo.png")}
            maxHeight={1000}
            resizeMode="contain"
          />
        </>
      ),
    }),
    LessonExplanatory({
      children: (
        <>
          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Observe o triângulo equilátero novamente:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula6/triangulo_equilatero_ex3.png")}
            maxHeight={300}
            resizeMode="contain"
          />

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Para fazer a demonstração da área, usaremos apenas a metade
            destacada do triângulo.
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula6/triangulo_equilatero_metade_ex4.png")}
            maxHeight={300}
            resizeMode="contain"
          />

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Para realizarmos a a demonstração usaremos a fórmula já aprendida,
            na unidade 1, sobre à área do triângulo ( Base x Altura/2 ).
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula6/formula_area_triangulo.png")}
            maxHeight={300}
            resizeMode="contain"
            mb="sm"
          />

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Substituindo os valores:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula6/formula_area_triangulo_ex2.png")}
            maxHeight={300}
            resizeMode="contain"
            mb="sm"
          />

          <Text
            fontSize={18}
            fontWeight="900"
            mb="xxl"
            textAlign="center"
            color="redSection"
          >
            (Multiplique as variáveis L)
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula6/formula_area_triangulo_ex3.png")}
            maxHeight={300}
            resizeMode="contain"
            mb="sm"
          />

          <Text
            fontSize={18}
            fontWeight="900"
            mb="xxl"
            textAlign="center"
            color="redSection"
          >
            (Mantenha a primeira fração e inverta segunda)
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula6/formula_area_triangulo_ex4.png")}
            maxHeight={300}
            resizeMode="contain"
            mb="sm"
          />

          <Text
            fontSize={18}
            fontWeight="900"
            mb="xxl"
            textAlign="center"
            color="redSection"
          >
            (Faça a multiplicação)
          </Text>

          <Text
            fontSize={18}
            fontWeight="900"
            mb="xxl"
            textAlign="center"
            color="redSection"
          >
            Com isso temos a formula:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula6/formula_demonstrar_area_triangulo.png")}
            maxHeight={500}
            resizeMode="contain"
            mb="sm"
          />
        </>
      ),
    }),

    Recomendation(),
    LessonQuiz({
      title:
        "1. Encontre e o comprimento da altura de um triângulo equilátero que tem lados de comprimento 2 m.",
      image: require("@/assets/images/lessons/aula6/triangulo_equilatero_exercicio_1.png"),
      answer: "√3",
      questionOptions: ["√3", "√2", "1"],
    }),
    LessonQuiz({
      title:
        "2. Qual é a área de um triângulo equilátero com lados de 10 cm de comprimento?.",
      image: require("@/assets/images/lessons/aula6/triangulo_equilatero_exercicio_2.png"),
      answer: "43,3 cm²",
      questionOptions: ["43,2 cm²", "43,6 cm²", "43,3 cm²"],
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
