import {
  Button,
  Center,
  Container,
  ControledInput,
  Image,
  Text,
} from "@/components/UI";
import React from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import Logo from "@/assets/images/logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useAuthStore } from "@/context/auth";
import AuthService from "@/services/auth";
import { userLoginValidator } from "@/utils/validations/users";
import { useRouter } from "expo-router";

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const { signIn } = useAuthStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(userLoginValidator),
  });

  const handleLogin = async ({ email, password }: FormData) => {
    try {
      signIn(await AuthService.login({ email, password }));
      router.replace("/(tabs)/learn");
    } catch (error) {
      Alert.alert("Erro", "Usuário ou senha incorretos");
    }
  };

  return (
    <Container padding="lg" justifyContent="center">
      <Center flex={0.7}>
        <Image source={Logo} resizeMode="contain" maxHeight={200} />
        <Text variant="display">TRIMATHIC</Text>
      </Center>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView>
          <ControledInput
            control={control}
            name="email"
            icon="user"
            label="Usuario"
            placeholder="Pedro Pedrosa"
            error={errors.email}
          />
          <ControledInput
            control={control}
            name="password"
            icon="lock"
            label="Senha"
            placeholder="Segredo"
            secureTextEntry
            error={errors.password}
          />

          <Button
            variant="primary"
            label="Entrar"
            onPress={handleSubmit(handleLogin)}
          />
          <Button
            variant="secundary"
            label="Registre-se"
            textProps={{ variant: "buttonSecundaryLabel" }}
            onPress={() => router.push("/register")}
          />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}
