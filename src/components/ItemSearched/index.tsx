import { FontAwesome } from "@expo/vector-icons";
import { Box, Row, Text } from "../UI";

interface ItemSearchedProps {
  name: string;
  is_completed: boolean;
}

export function ItemSearched({ name, is_completed }: ItemSearchedProps) {
  return (
    <Box
      padding="md"
      margin="sm"
      borderColor="indicator"
      borderRadius="md"
      borderWidth={2}
    >
      <Row justifyContent="space-between" alignItems="center">
        <Text variant="buttonLabel" color="textParagraph">
          {name}
        </Text>

        {is_completed ? (
          <FontAwesome name="check-square-o" size={28} color="#0ead76" />
        ) : (
          <FontAwesome name="square-o" size={28} color="#bfbfbf" />
        )}
      </Row>
    </Box>
  );
}
