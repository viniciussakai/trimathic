import { fonts } from "@/constants/fonts";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

import { ThemeProvider } from "@shopify/restyle";
import { theme } from "@/styles/theme";
import { RealmProvider } from "@/database";

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
      <RealmProvider>
        <Stack screenOptions={{ headerShown: false }}></Stack>
      </RealmProvider>
    </ThemeProvider>
  );
}
