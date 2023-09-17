import Retangle from "@/assets/images/lessons/aula1/hollo_retangle.png";
import { LessonDragModel } from "@/components/LessonModels/";
import { LessonHeader } from "@/components/LessonModels/lessonHeader";
import { Box } from "@/components/UI";
import { useScreens } from "@/hooks/useScreens";

export default function retangulo() {
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
