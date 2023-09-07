import Retangle from "@/assets/images/lessons/hollo_retangle.png";
import { LessonDragModel } from "@/components/LessonModels/";
import { LessonHeader } from "@/components/LessonModels/lessonHeader";
import { Box } from "@/components/UI";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function class1() {
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
    LessonDragModel({
      title: "Arraste as palavras para os locais corretos",
      answer: ["Altura", "Base"],
      questionOptions: ["Altura", "Base"],
      image: Retangle,
      questionBoxes: [
        { x: -30, y: 175, rotation: -90 },
        { x: 90, y: 355, rotation: 0 },
      ],
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
