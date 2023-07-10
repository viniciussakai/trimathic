import styled from "@emotion/native";
import { color, space, system, typography } from "styled-system";

const fontFamily = system({
  fontWeight: {
    property: "fontFamily",
    scale: "fontWeight",
  },
});

export const Text = styled.Text`
  ${color};
  ${typography};
  ${space};
  ${fontFamily};
`;

Text.defaultProps = {
  color: "neutral.900",
  fontSize: "md",
  fontWeight: "normal",
  letterSpacing: 1,
};

export const Heading = styled(Text)``;

Heading.defaultProps = {
  letterSpacing: 0,
  fontSize: "dmd",
  fontWeight: "bold",
  color: "neutral.900",
  textAlign: "center",
};
