import React, { useEffect, useState } from "react";

import { Column, Image, RadioGroup, Text } from "@/components/UI";
import { LessonFooter } from "../lessonFooter";

type LessonDragModelProps = {
  title: string;
  image?: any;
  answer: string;
  questionOptions: string[];
  handleNextLesson?: Function;
};

export default function LessonQuiz({
  title,
  image,
  answer,
  questionOptions,
  handleNextLesson,
}: LessonDragModelProps) {
  const [correct, setCorrect] = useState(false);
  const [incorrect, setIncorrect] = useState(false);

  const [selected, setSelected] = useState("");

  const handleFinish = () => {
    const correct = selected === answer;

    if (correct) {
      setCorrect(true);
      setIncorrect(false);
    } else {
      setIncorrect(true);
      setCorrect(false);
    }
  };

  const handleTryAgain = () => {
    setSelected("");
    setIncorrect(false);
    setCorrect(false);
  };

  useEffect(() => {
    if (selected !== "") {
      handleFinish();
    }
  }, [selected]);

  return (
    <Column alignItems="center" flex={1}>
      <Text variant="heading" textAlign="center" color="textParagraph">
        {title}
      </Text>

      <Image source={image} maxHeight={500} resizeMode="contain" />

      <RadioGroup
        options={questionOptions}
        selected={selected}
        onSelect={(option: any) => setSelected(option)}
      />

      <LessonFooter
        correct={correct}
        incorrect={incorrect}
        handleIncorrect={handleTryAgain}
        handleNextLesson={handleNextLesson}
      />
    </Column>
  );
}
