import React, { useRef, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { Button, Text, Card, Box, Row } from "../UI";
import { SlideItem } from "./slide";
import { Animated } from "react-native";
import { SlideIndicator } from "./indicator";

const slides = [
  {
    id: "1",
    title: "Aprenda matematica de graça!",
    paragraph:
      "Aqui você aprendera todos os conceitos de geometria basica e trigonometria",
  },
  {
    id: "2",
    title: "Aprenda filosi de forma divertida",
    paragraph: "Aprenda matemática de forma divertida",
  },
  {
    id: "3",
    title: "Aprenda matemática com nossos melhores",
    paragraph: "Aprenda matemática de forma divertida",
  },
];

export function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const onScrollEvent = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  return (
    <Box
      flex={0.8}
      backgroundColor="cardPrimaryBackground"
      borderTopLeftRadius={"xxl"}
      borderTopRightRadius={"xxl"}
      paddingVertical="xl"
    >
      <FlatList
        data={slides}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        bounces
        showsHorizontalScrollIndicator={false}
        onScroll={onScrollEvent}
        onViewableItemsChanged={viewableItemsChanged}
        renderItem={({ item }) => <SlideItem item={item} />}
      />

      <Row justifyContent="center" marginBottom="lg">
        {slides.map((_, index) =>
          index === currentIndex ? (
            <SlideIndicator key={index} active />
          ) : (
            <SlideIndicator key={index} />
          )
        )}
      </Row>

      <Row
        justifyContent="space-between"
        alignItems="center"
        paddingHorizontal="lg"
      >
        <Button variant="ghost" label="Registre-se" onPress={() => {}} />
        <Button
          variant="white"
          label="Login"
          paddingHorizontal="xxl"
          onPress={() => {}}
          textProps={{ variant: "buttonWhiteLabel" }}
        />
      </Row>
    </Box>
  );
}
