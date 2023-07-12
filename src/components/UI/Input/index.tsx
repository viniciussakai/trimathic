import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { Container, IconContainer, InputContainer, InputText } from "./styles";
import { Box } from "../Box";
import { Text } from "../Text";
import theme from "@/styles/theme";

export type InputProps = TextInputProps & {
  icon: React.ComponentProps<typeof Feather>["name"];
  value?: string;
  label?: string;
};

export function Input({ icon, value, label, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container>
      {label && <Text variant="inputLabel">{label}</Text>}

      <InputContainer>
        <IconContainer isFocused={isFocused}>
          <Feather
            name={icon}
            size={24}
            color={
              isFocused || isFilled
                ? theme.colors.cardPrimaryBackground
                : "#AEAEB3"
            }
          />
        </IconContainer>

        <InputText
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          isFocused={isFocused}
          value={value}
          {...rest}
        />
      </InputContainer>
    </Container>
  );
}
