import { Box, Button, Container, ControledInput, Text } from "@/components/UI";
import { useAuthStore } from "@/context/auth";
import { User } from "@/database/models/User";
import { ProfileData, userProfileValidator } from "@/utils/validations/profile";

import { FontAwesome } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";

import { Stack, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import AuthService from "@/services/auth";

export default function TabProfile() {
  const { signIn, signOut, user } = useAuthStore();
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileData>({
    resolver: yupResolver(userProfileValidator) as any,
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  const onSubmit = async (data: ProfileData) => {
    try {
      const userUpdated = await AuthService.update(user.id, {
        name: data.name,
        email: data.email,
        password: data.password,
      } as User);

      Alert.alert("Sucesso", "Usuario cadastrado com sucesso");

      signIn(userUpdated || user);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível realizar o update");
    }
  };

  return (
    <Container padding="sm" alignContent="center">
      <Stack.Screen
        options={{
          contentStyle: {
            alignItems: "center",
            justifyContent: "center",
          },
          headerRight: () => (
            <TouchableOpacity
              style={{ paddingRight: 16 }}
              onPress={() => signOut()}
            >
              <FontAwesome name="sign-out" size={28} color="white" />
            </TouchableOpacity>
          ),
        }}
      />

      <Box maxWidth={380} marginBottom="lg">
        <Text
          variant="heading"
          fontSize={24}
          fontWeight="bold"
          textAlign="left"
          color="textParagraph"
          marginBottom="sm"
        >
          Suas Informações
        </Text>
        <Text variant="paragraph">
          Nesta tela você pode alterar suas informações de perfil.
        </Text>
      </Box>

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
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

      <Button
        variant="primary"
        label="Alterar"
        onPress={handleSubmit(onSubmit)}
        marginTop="md"
      />
    </Container>
  );
}
