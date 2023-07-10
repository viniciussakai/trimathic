import styled from "@emotion/native";

import { Merge } from "type-fest";

import { ViewProps } from "react-native/types";
import {
  BorderProps,
  ColorProps,
  LayoutProps,
  SpaceProps,
  border,
  color,
  height,
  layout,
  space,
} from "styled-system";

export const View = styled.View`
  display: flex;
  ${layout};
  ${color};
  ${space};
  ${border}
`;

export const Box = styled.View`
  display: flex;
  ${layout};
  ${color};
  ${space};
  ${border}
`;

export const Column = styled(Box)``;
Column.defaultProps = {
  flex: 1,
  flexDirection: "column",
};

export const Row = styled(Box)``;
Row.defaultProps = {
  flex: 1,
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

export const Center = styled(Box)`
  align-items: center;
  justify-content: center;
`;
