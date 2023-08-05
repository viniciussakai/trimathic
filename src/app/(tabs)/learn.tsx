import React from "react";
import { Column, Container, Row, Text } from "@/components/UI";
import { ScrollView } from "react-native";
import { HomeHero } from "@/components/HomeHero";
import { UnitTitle } from "@/components/UnitTitle";
import { CheckPoint } from "@/components/CheckPoint";

export default function TabLearn() {
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
            <CheckPoint icon="book-open" />
          </Row>

          <Row justifyContent="center">
            <CheckPoint icon="star" active percent={50} />
          </Row>
          <Row justifyContent="flex-start">
            <CheckPoint icon="trophy" />
          </Row>
        </Column>
      </Container>
    </ScrollView>
  );
}
