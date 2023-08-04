import * as yup from "yup";

export const userLoginValidator = yup.object({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});

export type RegisterData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export const userRegisterValidator = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup
    .string()
    .min(8, "A senha deve ter ao minimo 8 caracteres")
    .required("Senha é obrigatória"),
  password_confirmation: yup
    .string()
    .oneOf([undefined, yup.ref("password")], "As senhas devem ser iguais"),
});
