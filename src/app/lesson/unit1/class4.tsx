import Retangle from "@/assets/images/lessons/hollo_retangle.png";
import { LessonQuiz, Recomendation } from "@/components/LessonModels";
import { LessonHeader } from "@/components/LessonModels/lessonHeader";
import { Box } from "@/components/UI";
import { useScreens } from "@/hooks/useScreens";

export default function class4() {
  const screens = [
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
