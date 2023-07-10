import { createTheme } from "@shopify/restyle";
import { pallete } from "./pallete";
import { fontSizes, fontFamily } from "./font";

export const theme = createTheme({
  colors: {
    mainBackground: pallete.neutral[25],
    textDisplay: pallete.neutral[900],
    textParagraph: pallete.neutral[900],
    textWhiteParagraph: pallete.neutral[200],
    cardPrimaryBackground: pallete.primary[500],
    constrastText: pallete.neutral[25],
    textPrimary: pallete.primary[500],

    indicator: pallete.neutral[300],
    indicatorActive: pallete.neutral[100],
    transparent: "transparent",
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },

  borderRadii: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },

  textVariants: {
    defaults: {
      fontFamily: fontFamily.normal,
    },
    display: {
      fontFamily: fontFamily.black,
      fontSize: fontSizes.dlg,
      color: "textDisplay",
    },

    heading: {
      fontFamily: fontFamily.bold,
      fontSize: fontSizes.dxs,
      color: "constrastText",
    },

    paragraph: {
      fontFamily: fontFamily.normal,
      fontSize: fontSizes.lg,
      color: "textParagraph",
    },

    paragraphWhite: {
      fontFamily: fontFamily.normal,
      fontSize: fontSizes.lg,
      color: "textWhiteParagraph",
    },

    buttonLabel: {
      fontFamily: fontFamily.bold,
      fontSize: fontSizes.lg,
      color: "constrastText",
    },

    buttonWhiteLabel: {
      fontFamily: fontFamily.bold,
      fontSize: fontSizes.lg,
      color: "textPrimary",
    },
  },
  cardVariants: {
    defaults: {},
    regular: {
      padding: "md",
      borderRadius: 8,
      backgroundColor: "mainBackground",
    },

    primary: {
      padding: "md",
      borderRadius: 8,
      backgroundColor: "cardPrimaryBackground",
    },

    elevated: {
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 15,
      elevation: 5,
    },
  },

  buttonVariants: {
    defaults: {
      paddingHorizontal: "lg",
      paddingVertical: "sm",
      borderRadius: "sm",
    },
    primary: {
      backgroundColor: "cardPrimaryBackground",
    },

    white: {
      backgroundColor: "constrastText",
    },

    ghost: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: "constrastText",
    },
  },
});

export type Theme = typeof theme;
export default theme;
