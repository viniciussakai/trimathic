import React from "react";

import { CheckPoint } from "@/components/CheckPoint";
import { HomeHero } from "@/components/HomeHero";
import { Column, Container, Row, Text } from "@/components/UI";
import { UnitTitle } from "@/components/UnitTitle";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native";

export default function TabLearn() {
  const router = useRouter();
  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <Container>
        <HomeHero />
        <Text variant="heading" color="textDisplay" textAlign="center" m="lg">
          Seu Progresso
        </Text>

        <UnitTitle
          title="Unidade 1"
          description="Conceito sobre area de figuras"
        />

        <Column paddingHorizontal="unitSpacing">
          <Row justifyContent="flex-end">
            <CheckPoint
              icon="book-open"
              onPress={() => router.push("/lesson/unit1/class1")}
            />
          </Row>

          <Row justifyContent="center">
            <CheckPoint
              icon="star"
              active
              percent={50}
              onPress={() => router.push("/lesson/unit1/class2")}
            />
          </Row>
          <Row justifyContent="flex-start">
            <CheckPoint
              icon="trophy"
              onPress={() => router.push("/lesson/unit1/class3")}
            />
          </Row>
        </Column>
      </Container>
    </ScrollView>
  );
}
