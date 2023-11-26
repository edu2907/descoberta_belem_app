import { object, string, InferType, ref } from 'yup';

const password = string()
  .required('Password is required');

const userName = string()
  .required('Username is required');

export const cadastroSchema = object({
  userName,
  email: string().required('Email is required').email('Email is invalid'),
  password,
  passwordConfirmation: string()
    .oneOf([ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

export type CadastroSchemaType = InferType<typeof cadastroSchema>;

export const loginSchema = object({
  userName,
  password
});

export type LoginSchemaType = InferType<typeof loginSchema>;