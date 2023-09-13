import * as yup from "yup";

export type ProfileData = {
  name?: string;
  email?: string;
  password?: string;
};

export const userProfileValidator = yup.object({
  name: yup.string(),
  email: yup.string().email("Email inválido"),
  password: yup.string().min(8, "A senha deve ter ao minimo 8 caracteres"),
});
