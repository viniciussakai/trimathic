import { DroppableBox } from "@/components/DragDrop";
import { Image } from "@/components/UI";
import React from "react";
import { View } from "react-native";

type DropContainerProps = {
  questionBoxes: {
    x: number;
    y: number;
    rotation?: number;
  }[];
  image: any;
  onDrop: (index: number) => any;
};

export function DropContainer({
  questionBoxes,
  image,
  onDrop,
}: DropContainerProps) {
  return (
    <>
      <View style={{ position: "relative", padding: 50, margin: 30 }}>
        <Image source={image} maxHeight={300} resizeMode="cover" />
        {questionBoxes.map((box, index) => (
          <DroppableBox
            onDrop={onDrop(index)}
            key={index}
            style={{
              position: "absolute",
              top: box.y,
              left: box.x,
              minWidth: 100,
              transform: [{ rotate: `${box.rotation}deg` }],
            }}
          />
        ))}
      </View>
    </>
  );
}
