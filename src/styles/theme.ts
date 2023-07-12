import { createTheme } from "@shopify/restyle";
import { pallete } from "./pallete";
import { fontSizes, fontFamily } from "./font";

export const theme = createTheme({
  colors: {
    mainBackground: pallete.white,
    textDisplay: pallete.neutral[900],
    textParagraph: pallete.neutral[900],
    textWhiteParagraph: pallete.neutral[200],
    cardPrimaryBackground: pallete.primary[500],
    constrastText: pallete.neutral[25],
    textPrimary: pallete.primary[500],

    indicator: pallete.neutral[300],
    indicatorActive: pallete.neutral[100],
    transparent: "transparent",

    inputLabel: pallete.neutral[700],

    primary: pallete.primary[500],
    secundary: pallete.neutral[200],

    inputBackground: pallete.neutral[100],
    inputText: pallete.neutral[700],

    secundaryText: pallete.neutral[700],
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
      alignSelf: "center",
    },

    buttonWhiteLabel: {
      fontFamily: fontFamily.bold,
      fontSize: fontSizes.lg,
      color: "textPrimary",
      alignSelf: "center",
    },

    buttonGhostLabel: {
      fontFamily: fontFamily.bold,
      fontSize: fontSizes.lg,
      color: "textPrimary",
      alignSelf: "center",
    },

    buttonSecundaryLabel: {
      fontFamily: fontFamily.bold,
      fontSize: fontSizes.lg,
      color: "secundaryText",
      alignSelf: "center",
    },

    inputLabel: {
      fontFamily: fontFamily.bold,
      fontSize: fontSizes.md,
      color: "inputLabel",
      marginBottom: "xs",
      paddingHorizontal: "xs",
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
      paddingVertical: "md",
      borderRadius: "sm",
      marginBottom: "sm",
    },
    primary: {
      backgroundColor: "cardPrimaryBackground",
    },

    white: {
      backgroundColor: "constrastText",
    },

    ghost: {
      backgroundColor: "transparent",
      borderWidth: 2,
      borderColor: "primary",
    },

    ghostWhite: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: "constrastText",
    },

    secundary: {
      backgroundColor: "secundary",
    },
  },
});

export type Theme = typeof theme;
export default theme;
