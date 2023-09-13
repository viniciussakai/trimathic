import { Column } from "@/components/UI";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { LessonFooter } from "../lessonFooter";

type LessonExplanatoryProps = {
  children: React.ReactNode;
};

export function LessonExplanatory({ children }: LessonExplanatoryProps) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <Column alignItems="center">
        {children}
        <LessonFooter correct={true} />
      </Column>
    </ScrollView>
  );
}
