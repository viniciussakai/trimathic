import { Button, Center, Container, Image, Text } from "@/components/UI";
import { ControledInput } from "@/components/UI";
import React from "react";

import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import Logo from "@/assets/images/logo.png";
import { StatusBar } from "expo-status-bar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userLoginValidator } from "@/utils/validations/users";
import AuthService from "@/services/auth";

import { useRouter } from "expo-router";
import { RegisterData, userRegisterValidator } from "@/utils/validations/users";
import { User } from "@/database/models/User";

export default function Register() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: yupResolver(userRegisterValidator) as any,
  });

  const onSubmit = async (data: RegisterData) => {
    try {
      await AuthService.register({
        name: data.name,
        email: data.email,
        password: data.password,
      } as User);
      Alert.alert("Sucesso", "Usuario cadastrado com sucesso", [
        {
          text: "OK",
          onPress: () => router.push("/login"),
        },
      ]);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível realizar o cadastro");
    }
  };

  return (
    <Container padding="md" justifyContent="center">
      <StatusBar style="dark" />
      <Center flex={0.7}>
        <Image source={Logo} resizeMode="contain" maxHeight={200} />
        <Text variant="display">TRIMATHIC</Text>
      </Center>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView>
          <ControledInput
            control={control}
            name="name"
            icon="user"
            label="Name"
            placeholder="Pedro Pedrosa"
            error={errors.name}
          />

          <ControledInput
            control={control}
            name="email"
            icon="mail"
            label="Email"
            placeholder="pedro@online.com"
            keyboardType="email-address"
            error={errors.email}
          />
          <ControledInput
            control={control}
            name="password"
            icon="lock"
            label="Senha"
            placeholder="Segredo"
            error={errors.password}
            secureTextEntry
          />
          <ControledInput
            control={control}
            name="password_confirmation"
            icon="lock"
            label="Senha"
            placeholder="Segredo"
            secureTextEntry
            error={errors.password_confirmation}
          />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

      <Button
        variant="primary"
        label="Cadastrar"
        onPress={handleSubmit(onSubmit)}
        marginTop="md"
      />
    </Container>
  );
}
