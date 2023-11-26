import { t } from 'i18n-js';
import { object, string, InferType, ref } from 'yup';

const password = string()
  .required(t('auth.validationErrors.requiredPassword'));

const userName = string()
  .required(t('auth.validationErrors.requiredUserName'));

export const cadastroSchema = object({
  userName,
  email: string().required(t('auth.validationErrors.requiredEmail')).email(t('auth.validationErrors.invalidEmail')),
  password,
  passwordConfirmation: string()
    .oneOf([ref('password')], t('auth.validationErrors.passwordsMustMatch'))
    .required(t('auth.validationErrors.requiredPasswordConfirmation')),
});

export type CadastroSchemaType = InferType<typeof cadastroSchema>;

export const loginSchema = object({
  userName,
  password
});

export type LoginSchemaType = InferType<typeof loginSchema>;