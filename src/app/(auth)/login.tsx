import { Box, Button, Center, Container, Image, Text } from "@/components/UI";
import { Input } from "@/components/UI/Input";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import Logo from "@/assets/images/logo.png";

export default function Login() {
  return (
    <Container padding="lg" justifyContent="center">
      <Center flex={0.7}>
        <Image source={Logo} resizeMode="contain" maxHeight={200} />
        <Text variant="display">TRIMATHIC</Text>
      </Center>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView>
          <Input icon="user" label="Usuario" placeholder="Pedro Pedrosa" />
          <Input
            icon="lock"
            label="Senha"
            placeholder="Segredo"
            secureTextEntry
          />
          <Text fontWeight="bold" marginBottom="lg">
            Esqueceu sua Senha?
          </Text>

          <Button variant="primary" label="Entrar" />
          <Button
            variant="secundary"
            label="Registre-se"
            textProps={{ variant: "buttonSecundaryLabel" }}
          />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}
