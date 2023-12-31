import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Box, Text } from "../UI";
import { ProgressCircle } from "../UI/ProgressCircle";
import { styles } from "./styles";

type Props = {
  icon: string;
  active?: boolean;
  percent?: number;
  onPress?: () => void;
};

export function CheckPoint({ icon, active, percent = 0, onPress }: Props) {
  const Item = () => {
    return (
      <Box
        backgroundColor={active ? "greenSection" : "secundary"}
        paddingHorizontal="lg"
        paddingVertical="md"
        margin="sm"
        style={[
          styles.medalStyle,
          {
            borderBottomColor: active ? "#000" : "#969696",
          },
        ]}
      >
        <FontAwesome5
          name={icon}
          size={32}
          color={active ? "white" : "#969696"}
        />
      </Box>
    );
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Box alignItems="center" marginVertical={active ? "lg" : "sm"}>
        {active ? (
          <ProgressCircle
            percent={percent}
            radius={60}
            borderWidth={8}
            color="#FFC800"
            shadowColor="#E5E5E5"
            bgColor="#fff"
          >
            <Item />
          </ProgressCircle>
        ) : (
          <Item />
        )}

        {active && (
          <Box style={styles.active}>
            <Text variant="paragraph" color="greenSection" fontWeight="bold">
              ACTIVE
            </Text>
          </Box>
        )}
      </Box>
    </TouchableOpacity>
  );
}
