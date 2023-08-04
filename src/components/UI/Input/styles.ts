import { TextInput } from "react-native";
import styled, { css } from "@emotion/native";
import { theme } from "@/styles/theme";

const { colors } = theme;

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: column;
  width: 100%;
  margin-bottom: 8px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
`;

export const IconContainer = styled.View<Props>`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;

  margin-right: 2px;
  background-color: ${colors.inputBackground};

  ${({ isFocused }: Props) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${colors.primary};
    `};

  border-radius: 4px 0 0 4px;
`;

export const InputText = styled(TextInput)<Props>`
  flex: 1;
  background-color: ${colors.inputBackground};
  color: ${theme.colors.inputText};
  padding: 0 23px;
  border-radius: 0 4px 4px 0;

  ${({ isFocused }: Props) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${colors.primary};
    `};
`;
