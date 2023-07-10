import {
  Box,
  Heading,
  Text,
  ImageBox,
  Image,
  Column,
  Row,
} from "@/components/UI";
import LeafSource from "@/assets/images/leaf_effect.png";
import Logo from "@/assets/images/logo.png";

import React from "react";
import { Onboarding } from "@/components/Onboarding";
import { StatusBar } from "expo-status-bar";

export default function Welcome() {
  return (
    <Column>
      <StatusBar style="dark" />
      <Row pt={10}>
        <ImageBox source={LeafSource}>
          <Image source={Logo} maxWidth={180} maxHeight={180} />
          <Heading fontSize="dsm" textAlign="center" mt={6} fontWeight="black">
            TRIMATHIC
          </Heading>
        </ImageBox>
      </Row>
      <Onboarding />
    </Column>
  );
}
