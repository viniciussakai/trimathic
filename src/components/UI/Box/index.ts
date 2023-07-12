import styled from "@emotion/native";

import { createBox } from "@shopify/restyle";
import { Theme } from "@/styles/theme";
import { SafeAreaView } from "react-native";

export const Container = createBox<
  Theme,
  React.ComponentProps<typeof SafeAreaView>
>(SafeAreaView);
Container.defaultProps = {
  flex: 1,
  backgroundColor: "mainBackground",
};

export const Box = createBox<Theme>();

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
