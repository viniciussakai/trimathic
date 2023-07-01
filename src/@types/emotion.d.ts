import "@emotion/react";

import { theme } from "@/styles/theme";

type ThemeInterface = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends ThemeInterface {}
}
