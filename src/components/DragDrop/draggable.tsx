import { DraxView } from "react-native-drax";
import { styles } from "./styles";
import { Text } from "../UI";

type DragItemProps = { item: string };
export const DraggableBox = ({ item }: DragItemProps) => {
  return (
    <DraxView
      style={styles.normalStyle}
      draggingStyle={styles.dragging}
      dragReleasedStyle={styles.dragging}
      dragPayload={{ item }}
    >
      <Text variant="paragraphWhite" textAlign="center">
        {item}
      </Text>
    </DraxView>
  );
};
