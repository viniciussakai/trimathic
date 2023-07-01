import styled from "@emotion/native";
import { color, height, layout, space } from "styled-system";

export const Box = styled.View`
  ${layout};
  ${color};
  ${space};
`;

Box.defaultProps = {
  flex: 1,
  bg: "neutral.50",
  alignItems: "center",
  justifyContent: "center",
};

export const Column = styled(Box)``;
Column.defaultProps = {
  flexDirection: "column",
};

export const Row = styled(Box)``;
Row.defaultProps = {
  flexDirection: "row",
};

export const Separator = styled.View`
  ${space};
  ${color};
  ${height};
  width: 80%;
`;

Separator.defaultProps = {
  height: 1,
  bg: "neutral.300",
};
