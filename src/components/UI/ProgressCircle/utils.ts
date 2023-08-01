const percentToDegrees = (percent: number) => {
  return percent * 3.6;
};

type ComputeType = {
  rootPercent: number;
  color?: string;
  shadowColor?: string;
};

export const computeDerivedState = ({
  rootPercent,
  color,
  shadowColor,
}: ComputeType) => {
  const percent = Math.max(Math.min(100, rootPercent), 0);
  const needHalfCircle2 = percent > 50;

  let halfCircle1Degree;
  let halfCircle2Degree;

  if (needHalfCircle2) {
    halfCircle1Degree = 180;
    halfCircle2Degree = percentToDegrees(percent);
  } else {
    halfCircle1Degree = percentToDegrees(percent);
    halfCircle2Degree = 0;
  }

  return {
    halfCircle1Degree,
    halfCircle2Degree,
    halfCircle2Styles: {
      backgroundColor: needHalfCircle2 ? color : shadowColor,
    },
  };
};
