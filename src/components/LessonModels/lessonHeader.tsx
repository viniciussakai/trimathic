import React from "react";

import Icon from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

import { ProgressBar } from "../ProgressBar";
import { Row, Text } from "../UI";

type LessonHeaderProps = {
  progress: number;
  title: string;
};

export function LessonHeader({ progress, title }: LessonHeaderProps) {
  const router = useRouter();
  return (
    <>
      <Row alignItems="center">
        <TouchableOpacity onPress={() => router.replace("/learn")}>
          <Icon name="x" size={24} />
        </TouchableOpacity>

        <ProgressBar
          progress={(progress * 300) / 100}
          style={{
            width: 300,
          }}
        />
      </Row>
      <Text variant="heading" textAlign="center" color="textParagraph" mt="md">
        {title}
      </Text>
    </>
  );
}
