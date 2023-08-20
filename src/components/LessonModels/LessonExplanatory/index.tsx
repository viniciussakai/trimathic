import { Column } from "@/components/UI";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

type LessonExplanatoryProps = {
  children: React.ReactNode;
};

export function LessonExplanatory({ children }: LessonExplanatoryProps) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <Column p="sm" alignItems="center">
        {children}
      </Column>
    </ScrollView>
  );
}
