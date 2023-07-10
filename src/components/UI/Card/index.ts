import {
  createRestyleComponent,
  createVariant,
  spacing,
  SpacingProps,
  VariantProps,
} from "@shopify/restyle";
import { Theme } from "@/styles/theme";
import { View } from "react-native";

type Props = SpacingProps<Theme> & VariantProps<Theme, "cardVariants">;

export const Card = createRestyleComponent<Props, Theme>(
  [
    spacing,
    createVariant({
      themeKey: "cardVariants",
      defaults: {
        padding: "md",
      },
    }),
  ],
  View
);
