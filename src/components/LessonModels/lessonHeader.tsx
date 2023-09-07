import React from "react";

import Icon from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

import { ProgressBar } from "../ProgressBar";
import { Row } from "../UI";

type LessonHeaderProps = {
  progress: number;
};

export function LessonHeader({ progress }: LessonHeaderProps) {
  const router = useRouter();
  return (
    <>
      <Row alignItems="center" p="sm">
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
    </>
  );
}
