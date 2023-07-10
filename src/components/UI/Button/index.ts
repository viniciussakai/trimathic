import styled from "@emotion/native";
import { border, color, layout, space } from "styled-system";

export const Button = styled.TouchableOpacity`
  display: flex;
  ${layout};
  ${color};
  ${space};
  ${border};
`;

Button.defaultProps = {
  bg: "primary.500",
  borderRadius: 4,
  height: 48,
  justifyContent: "center",
  alignItems: "center",
  px: 5,
  py: 3,
};
