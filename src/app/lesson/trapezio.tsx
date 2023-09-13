import { LessonExplanatory } from "@/components/LessonModels/LessonExplanatory";
import { LessonHeader } from "@/components/LessonModels/lessonHeader";
import { Box, Image, Text } from "@/components/UI";

import { LessonQuiz, Recomendation } from "@/components/LessonModels";
import { useScreens } from "@/hooks/useScreens";

export default function trapezio() {
  const screens = [
    LessonExplanatory({
      children: (
        <>
          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Observe o trapézio:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula4/trapezio_ex1.png")}
            maxHeight={300}
            resizeMode="contain"
          />

          <Text fontSize={18} fontWeight="900" my="xxl" textAlign="center">
            Veja que podemos dividí-lo em dois triângulos A e B.
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula4/trapezio_ex2.png")}
            maxHeight={300}
            resizeMode="contain"
            mb="sm"
          />

          <Text fontSize={18} fontWeight="900" my="xxl" textAlign="center">
            Observe o triângulo A:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula4/triangulo_trapezio_ex1.png")}
            maxHeight={300}
            resizeMode="contain"
          />

          <Text fontSize={18} fontWeight="900" my="xxl" textAlign="center">
            Observe o triângulo B:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula4/triangulo_trapezio_ex2.png")}
            maxHeight={300}
            resizeMode="contain"
          />

          <Text fontSize={18} fontWeight="900" my="xxl" textAlign="center">
            Para descobrir à Area do Trapézio, fazemos a soma das áreas dos
            Triângulos A e B:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula4/formula_trapezio_ex1.png")}
            maxHeight={80}
            resizeMode="contain"
          />

          <Image
            source={require("@/assets/images/lessons/aula4/formula_trapezio_ex2.png")}
            maxHeight={80}
            resizeMode="contain"
          />

          <Image
            source={require("@/assets/images/lessons/aula4/formula_trapezio_ex3.png")}
            maxHeight={150}
            resizeMode="contain"
          />
        </>
      ),
    }),

    Recomendation(),
    LessonQuiz({
      title: "Calcule a Área do trapézio e assinale a alternativa correta:",
      image: require("@/assets/images/lessons/aula4/trapezio_exercio.png"),
      answer: "68 cm²",
      questionOptions: ["68 cm²", "70 cm²", "84 cm²"],
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
