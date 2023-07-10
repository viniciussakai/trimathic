import styled from "@emotion/native";
import { border, color, layout, space } from "styled-system";

export const ImageBox = styled.ImageBackground`
  ${space};
  ${layout};
  ${color};
  ${border};

  width: 100%;
  height: 100%;

  flex: 1;
  align-items: center;
  justify-content: center;
`;

ImageBox.defaultProps = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};

export const Image = styled.Image`
  ${space};
  ${layout};
  ${color};
  ${border};
`;

Image.defaultProps = {
  flex: 1,

  alignItems: "center",
  justifyContent: "center",
};
