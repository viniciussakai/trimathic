import theme from "@/styles/theme";
import styled, { css } from "@emotion/native";

type Props = {
  active?: boolean;
};

const activeIndicator = css`
  width: 25px;
  height: 10px;
  border-radius: 5px;
  background-color: ${theme.colors.indicatorActive};
`;

export const SlideIndicator = styled.View<Props>`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: ${theme.colors.indicator};

  ${({ active }) => active && activeIndicator}
`;
