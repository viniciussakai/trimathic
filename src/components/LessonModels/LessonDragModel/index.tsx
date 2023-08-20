import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";

import { Column, Text } from "@/components/UI";
import { DraxProvider } from "react-native-drax";

import { shuffleArray } from "@/utils/array";

import { LessonFooter } from "../lessonFooter";
import { DragContainer } from "./dragContainer";
import { DropContainer } from "./dropContainer";

type LessonDragModelProps = {
  title: string;
  image?: any;
  answer: string[];
  questionOptions: string[];
  questionBoxes: {
    x: number;
    y: number;
    rotation?: number;
  }[];
  nextLesson?: string;
  handleNextLesson?: Function;
};

export default function LessonDragModel({
  answer,
  questionOptions,
  questionBoxes,
  title,
  image,
  handleNextLesson,
  nextLesson,
}: LessonDragModelProps) {
  const [usefulItems, setUsefulItems] = useState(shuffleArray(questionOptions));
  const [answerItems, setAnswerItems] = useState(
    Array(answer.length).fill(undefined)
  );

  const [correct, setCorrect] = useState(false);
  const [incorrect, setIncorrect] = useState(false);

  const handleDrop = (index: number) => {
    return {
      items: answerItems,
      setItems: setAnswerItems,
      setItemOptions: setUsefulItems,
      answerIndex: index,
    };
  };

  const handleFinish = () => {
    const correct = answerItems.every((item, index) => {
      return item === answer[index];
    });

    if (correct) {
      setCorrect(true);
      setIncorrect(false);
    } else {
      setIncorrect(true);
      setCorrect(false);
    }
  };

  const handleTryAgain = () => {
    setAnswerItems(Array(answer.length).fill(undefined));
    setUsefulItems(shuffleArray(questionOptions));
    setCorrect(false);
    setIncorrect(false);
  };

  useEffect(() => {
    if (!answerItems.some((item) => item === undefined || item === "")) {
      handleFinish();
    }
  }, [answerItems]);

  return (
    <DraxProvider>
      <StatusBar barStyle="dark-content" />
      <Column flex={1} alignItems="center" p="sm">
        <Text
          variant="heading"
          textAlign="center"
          color="textParagraph"
          mt="md"
        >
          {title}
        </Text>

        <DropContainer
          image={image}
          questionBoxes={questionBoxes}
          onDrop={handleDrop}
        />
        <DragContainer items={usefulItems} />
      </Column>

      <LessonFooter
        correct={correct}
        incorrect={incorrect}
        nextLesson={nextLesson}
        handleIncorrect={handleTryAgain}
        handleNextLesson={handleNextLesson}
      />
    </DraxProvider>
  );
}
