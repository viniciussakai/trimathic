import { DraggableBox } from "@/components/DragDrop";
import { Row, Text } from "@/components/UI";
import React from "react";

type DragContainerProps = {
  items: string[];
};

export function DragContainer({ items }: DragContainerProps) {
  return (
    <>
      {items.length !== 0 && <Text fontWeight="600">Componentes</Text>}

      <Row alignItems="center" justifyContent="center" gap="sm" flexWrap="wrap">
        {items.map((item, index) => (
          <DraggableBox key={index} item={item} />
        ))}
      </Row>
    </>
  );
}
