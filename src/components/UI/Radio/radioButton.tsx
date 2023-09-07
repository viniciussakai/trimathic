import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Row } from "../Box";
import { Text } from "../Text";

type RadioButtonProps = {
  selected: boolean;
  value: string;
  onPress: Function;
};
export const RadioButton = ({ selected, value, onPress }: RadioButtonProps) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Row alignItems="center" justifyContent="center">
        <FontAwesome
          name={selected ? "circle" : "circle-o"}
          size={24}
          color={"#2510ee"}
        />

        <Text marginLeft="md" fontSize={20}>
          {value}
        </Text>
      </Row>
    </TouchableOpacity>
  );
};
