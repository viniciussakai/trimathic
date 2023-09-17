import { Column } from "@/components/UI";
import React from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { LessonFooter } from "../lessonFooter";

type LessonExplanatoryProps = {
  children: React.ReactNode;
};

export function LessonExplanatory({ children }: LessonExplanatoryProps) {
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Column alignItems="center" paddingHorizontal="lg" paddingBottom="xxl">
          {children}
          <LessonFooter correct={true} />
        </Column>
      </ScrollView>
    </SafeAreaView>
  );
}
