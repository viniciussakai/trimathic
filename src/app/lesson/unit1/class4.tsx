import Retangle from "@/assets/images/lessons/hollo_retangle.png";
import { LessonQuiz, Recomendation } from "@/components/LessonModels";
import { LessonHeader } from "@/components/LessonModels/lessonHeader";
import { Box } from "@/components/UI";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function class4() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  const handleNextLesson = () => {
    const hasNextLesson = activeScreen + 1 < screens.length;

    if (hasNextLesson) {
      setActiveScreen(activeScreen + 1);
      setProgress(((activeScreen + 1) * 100) / screens.length);
      return;
    }

    setProgress(100);
    router.replace("/learn");
    return;
  };

  const screens = [
    Recomendation({ handleNextLesson }),
    LessonQuiz({
      title: "Lesson",
      image: Retangle,
      answer: "189 cm²",
      questionOptions: ["189 cm²", "198 cm²", "200 cm²"],
      handleNextLesson,
    }),
  ];

  return (
    <Box flex={1} alignItems="center" pt="xxl">
      <LessonHeader progress={progress} />
      {screens[activeScreen]}
    </Box>
  );
}
