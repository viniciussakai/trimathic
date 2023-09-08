import { LessonExplanatory } from "@/components/LessonModels/LessonExplanatory";
import { LessonHeader } from "@/components/LessonModels/lessonHeader";
import { Box, Image, Text } from "@/components/UI";

import CuttedHollowRetangle from "@/assets/images/lessons/cutted_hollow_retangle.png";
import Cutted from "@/assets/images/lessons/cutted_retangle.png";
import Equation2_1 from "@/assets/images/lessons/equation2-1.png";
import Equation3_1 from "@/assets/images/lessons/equation3-1.png";
import Retangle from "@/assets/images/lessons/hollo_retangle.png";
import Triangle from "@/assets/images/lessons/triangle.png";
import { LessonQuiz, Recomendation } from "@/components/LessonModels";
import { useScreens } from "@/hooks/useScreens";

export default function class3() {
  const screens = [
    LessonExplanatory({
      children: (
        <>
          <Text fontSize={18} fontWeight="900" mb="xxl" textAlign="center">
            Observe este retangulo:
          </Text>

          <Image source={Retangle} maxHeight={300} resizeMode="contain" />

          <Text fontSize={18} fontWeight="900" my="xxl" textAlign="center">
            Veja que podemos dividi-lo em dois triângulos.
          </Text>

          <Image
            source={CuttedHollowRetangle}
            maxHeight={300}
            resizeMode="contain"
            mb="md"
          />

          <Image source={Cutted} maxHeight={300} resizeMode="contain" />

          <Text fontSize={18} fontWeight="900" my="xxl" textAlign="center">
            Baseado na formula da área dos retangulos:
          </Text>

          <Image source={Equation2_1} maxHeight={80} resizeMode="contain" />
          <Image source={Triangle} maxHeight={300} resizeMode="contain" />

          <Text fontSize={18} fontWeight="900" my="xxl" textAlign="center">
            Podemos deduzir e utilizar a formula da área de triângulos.
          </Text>

          <Image
            source={Equation3_1}
            maxHeight={80}
            resizeMode="contain"
            mb="xxl"
          />
        </>
      ),
    }),
    Recomendation(),
    LessonQuiz({
      title: "Lesson",
      image: Retangle,
      answer: "189 cm²",
      questionOptions: ["189 cm²", "198 cm²", "200 cm²"],
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
