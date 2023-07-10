import { fonts } from "@/constants/fonts";
import { useFonts } from "expo-font";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

import { ThemeProvider } from "@emotion/react";
import { theme } from "@/styles/theme";

export { ErrorBoundary } from "expo-router";

export default function RootLayout() {
  const [loaded, error] = useFonts(fonts);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  return (
    <ThemeProvider theme={theme}>
      <Stack screenOptions={{ headerShown: false }}></Stack>
    </ThemeProvider>
  );
}
