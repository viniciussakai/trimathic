import { LessonExplanatory } from "@/components/LessonModels/LessonExplanatory";
import { LessonHeader } from "@/components/LessonModels/lessonHeader";
import { Box, Image, Text } from "@/components/UI";

import { LessonQuiz, Recomendation } from "@/components/LessonModels";
import { useScreens } from "@/hooks/useScreens";

export default function relacao_sen_cos() {
  const screens = [
    LessonExplanatory({
      children: (
        <>
          <Text
            fontSize={25}
            fontWeight="900"
            marginVertical="lg"
            textAlign="center"
          >
            Relações entre seno e cosseno
          </Text>
          <Text fontSize={18} fontWeight="900" mb="md" textAlign="center">
            Para que você compreenda as relações entre seno e cosseno
            utilizaremos um exemplo.
          </Text>

          <Text fontSize={18} fontWeight="900" mb="lg" textAlign="center">
            EX: Dado o SenX = 1/3, com 0 {"<"} x {"<"}π/2, calcule o CosX.
          </Text>

          <Text fontSize={18} fontWeight="900" textAlign="center">
            Para se resolver esse exemplo utilizaremos a fórmula que determina
            que:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula12/formula_relacao_seno_cos.png")}
            maxHeight={350}
            resizeMode="contain"
            marginVertical="md"
          />

          <Text fontSize={18} fontWeight="900" mb="sm" textAlign="center">
            Com isso a resolução:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula12/resolucao_ex_relacao_seno_cos.png")}
            maxHeight={400}
            resizeMode="contain"
          />

          <Text
            fontSize={18}
            fontWeight="900"
            textAlign="center"
            marginVertical="lg"
          >
            Mas devemos nos atentar que como o ângulo é hipotetico, ele pode ser
            tanto - ou +, para isso usamos a informação dada 0 {"<"} x {"<"}π/2
            Com isso chegamos a resposta:
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula12/resposta_relacao_seno_cos_ex.png")}
            maxHeight={100}
            resizeMode="contain"
          />
        </>
      ),
    }),
    Recomendation(),
    LessonQuiz({
      title: "1.Determine o valor do Sen X, dado que Cosseno, Cos X = 2/6.",
      image: require("@/assets/images/mulher_sentada_livros.png"),
      answer: "2√4/6",
      questionOptions: ["2√4/6", "2√2/8", "2√5/4"],
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
