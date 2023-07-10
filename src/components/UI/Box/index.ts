import styled from "@emotion/native";

import { createBox } from "@shopify/restyle";
import { Theme } from "@/styles/theme";

export const Container = createBox<Theme>();
Container.defaultProps = {
  flex: 1,
};

export const Box = createBox<Theme>();
Box.defaultProps = {
  flex: 1,
};

export const Row = createBox<Theme>();
Row.defaultProps = {
  flexDirection: "row",
};

export const Column = createBox<Theme>();
Column.defaultProps = {
  flexDirection: "column",
};

export const Center = createBox<Theme>();
Center.defaultProps = {
  alignItems: "center",
  justifyContent: "center",
};
