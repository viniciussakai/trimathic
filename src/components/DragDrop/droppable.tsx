import { DraxSnapbackTargetPreset, DraxView } from "react-native-drax";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleProp, ViewStyle } from "react-native/types";
import { Text } from "../UI";
import { styles } from "./styles";

type DroppableBoxProps = {
  onDrop: {
    items: string[];
    setItems: Function;
    setItemOptions: Function;
    answerIndex: number;
  };
  style?: StyleProp<ViewStyle>;
};
export const DroppableBox = ({
  onDrop: { items, setItems, setItemOptions, answerIndex },
  style = {},
}: DroppableBoxProps) => {
  return (
    <DraxView
      style={[style]}
      receivingStyle={styles.receiving}
      renderContent={() => {
        const handleClicked = () => {
          if (items[answerIndex]) {
            setItemOptions((prev: any) => {
              const newUsefulItems = [...prev];
              newUsefulItems.push(items[answerIndex]);
              return newUsefulItems;
            });

            setItems((prev: any) => {
              const newItems = [...prev];
              newItems[answerIndex] = "";
              return newItems;
            });
          }
        };

        return (
          <TouchableOpacity
            onPress={handleClicked}
            style={items[answerIndex] ? styles.normalStyle : styles.droppable}
          >
            <Text variant="paragraphWhite" textAlign="center">
              {items[answerIndex] ? items[answerIndex] : ""}
            </Text>
          </TouchableOpacity>
        );
      }}
      onReceiveDragDrop={(event) => {
        const { item } = event.dragged.payload ?? {
          item: "?",
        };

        if (items[answerIndex] === undefined) {
          setItems((prev: any) => {
            const newItems = [...prev];
            newItems[answerIndex] = item;
            return newItems;
          });

          setItemOptions((prev: any) => {
            const newUsefulItems = [...prev];
            const index = newUsefulItems.indexOf(item);

            if (index > -1) {
              newUsefulItems.splice(index, 1);
            }

            return newUsefulItems;
          });
        } else {
          setItemOptions((prev: any) => {
            const newItems = [...prev];
            const index = newItems.indexOf(item);

            if (index > -1) {
              newItems.splice(index, 1);
            }

            if (items[answerIndex] !== "") newItems.push(items[answerIndex]);

            return newItems;
          });

          setItems((prev: any) => {
            const newItems = [...prev];
            newItems[answerIndex] = item;
            return newItems;
          });
        }

        return DraxSnapbackTargetPreset.None;
      }}
    />
  );
};
