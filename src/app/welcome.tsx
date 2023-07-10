import { ImageBox, Image, Text, Box, Container } from "@/components/UI";
import LeafSource from "@/assets/images/leaf_effect.png";
import Logo from "@/assets/images/logo.png";

import React from "react";
import { Onboarding } from "@/components/Onboarding";
import { StatusBar } from "expo-status-bar";

export default function Welcome() {
  return (
    <Container>
      <StatusBar style="dark" />
      <Box paddingTop="xxl">
        <ImageBox source={LeafSource}>
          <Image source={Logo} maxWidth={180} maxHeight={180} />
          <Text variant="display">TRIMATHIC</Text>
        </ImageBox>
      </Box>
      <Onboarding />
    </Container>
  );
}
