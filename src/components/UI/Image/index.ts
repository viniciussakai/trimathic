import { Theme } from "@/styles/theme";
import { createBox } from "@shopify/restyle";
import { ImageBackground, Image as IM } from "react-native";

export const ImageBox = createBox<
  Theme,
  React.ComponentProps<typeof ImageBackground>
>(ImageBackground);

ImageBox.defaultProps = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
};

export const Image = createBox<Theme, React.ComponentProps<typeof IM>>(IM);

Image.defaultProps = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};
