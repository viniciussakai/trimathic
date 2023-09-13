import { LessonExplanatory } from "@/components/LessonModels/LessonExplanatory";
import { LessonHeader } from "@/components/LessonModels/lessonHeader";
import { Box, Image, Text } from "@/components/UI";

import { LessonQuiz, Recomendation } from "@/components/LessonModels";
import { useScreens } from "@/hooks/useScreens";

export default function circulo() {
  const screens = [
    LessonExplanatory({
      children: (
        <>
          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Observe o circulo:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula7/circulo_ex_1.png")}
            maxHeight={300}
            resizeMode="contain"
          />

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Antes de aprendermos sobre as formulas utilizadas para calcular a
            área dessa figura, precisamos entender alguns conceitos.
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula7/circulo_ex_2.png")}
            maxHeight={300}
            resizeMode="contain"
          />

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Raio (r): é a distância do centro da figura até a sua borda
          </Text>

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Diametro (d): é a distância de uma borda da figura até a outra
            passando pelo centro, ou seja o dobro do raio.
          </Text>

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Circunferência (C): é o comprimento da borda da figura.
          </Text>

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Pi (π): é uma constante matemática, obtida através da razão:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula7/cincurferencia_diametro.png")}
            maxHeight={300}
            resizeMode="contain"
          />

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Através desses conceitos podemos deduzir algumas formulas
          </Text>

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            A formula da circunferência em termos de diâmetro é:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula7/formula_circunferencia_ex1.png")}
            maxHeight={300}
            resizeMode="contain"
          />

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Mas como o diâmetro é o dobro do raio podemos substituir d por 2r
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula7/formula_circunferencia_ex2.png")}
            maxHeight={300}
            resizeMode="contain"
          />

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Agora vamos finalmente deduzir a fórmula da área do círculo.
          </Text>

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Começamos dividindo o círculo em pequenos setores angulares, como se
            fossem fatias de pizza.
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula7/circulo_ex_3.png")}
            maxHeight={300}
            resizeMode="contain"
          />

          <Image
            my="lg"
            source={require("@/assets/images/lessons/aula7/fatias_ex_1.png")}
            maxHeight={300}
            resizeMode="contain"
          />

          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Agrupamos esses setores formando um polígono.
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula7/agrupamento_poligono_ex1.png")}
            maxHeight={300}
            resizeMode="contain"
          />

          <Image
            source={require("@/assets/images/lessons/aula7/agrupamento_poligono_ex2.png")}
            maxHeight={300}
            resizeMode="contain"
          />

          <Image
            source={require("@/assets/images/lessons/aula7/agrupamento_poligono_ex3.png")}
            maxHeight={300}
            resizeMode="contain"
          />

          <Text fontSize={18} fontWeight="900" my="xxl" textAlign="center">
            Através disso, podemos deduzir a formula da área de um círculo
          </Text>
          <Image
            source={require("@/assets/images/lessons/aula7/formula_deducao_circulo.png")}
            maxHeight={800}
            resizeMode="contain"
          />
        </>
      ),
    }),

    Recomendation(),
    LessonQuiz({
      title: "1. Descubra a área do círculo, com raio 4cm.",
      image: require("@/assets/images/lessons/aula7/circulo_exercicio_1.png"),
      answer: "16π cm²",
      questionOptions: ["8π cm²", "4π cm²", "16π cm²", "16cm"],
    }),
    LessonQuiz({
      title: "2. Descubra a área do círculo, com o diâmetro 10cm?",
      image: require("@/assets/images/lessons/aula7/circulo_exercicio_2.png"),
      answer: "25π cm²",
      questionOptions: ["8π cm²", "12π cm²", "25π cm²", "1π cm"],
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
