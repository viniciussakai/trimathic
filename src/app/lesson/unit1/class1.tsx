import Retangle from "@/assets/images/lessons/hollo_retangle.png";
import { LessonDragModel } from "@/components/LessonModels/";
import { LessonHeader } from "@/components/LessonModels/lessonHeader";
import { Box } from "@/components/UI";
import { useScreens } from "@/hooks/useScreens";

export default function class1() {
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
