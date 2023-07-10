import React, { useRef, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { Box, Button, Row, Text } from "../UI";
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
      borderTopLeftRadius={50}
      borderTopRightRadius={50}
      flex={0.8}
      py={6}
      bg="primary.500"
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

      <Row justifyContent="center" flex={0}>
        {slides.map((_, index) =>
          index === currentIndex ? (
            <SlideIndicator key={index} bg="neutral.200" width={25} />
          ) : (
            <SlideIndicator key={index} />
          )
        )}
      </Row>

      <Row alignItems="center" justifyContent="space-between" px={10}>
        <Button borderWidth={1} borderColor="neutral.100">
          <Text color="neutral.50" fontSize="md">
            Registre-se
          </Text>
        </Button>
        <Button bg="neutral.100" px={10}>
          <Text color="primary.500" fontSize="md">
            Login
          </Text>
        </Button>
      </Row>
    </Box>
  );
}
