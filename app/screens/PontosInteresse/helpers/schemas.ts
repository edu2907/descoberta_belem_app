import { object, string, InferType, } from 'yup';

export const comentarioFormSchema = object({
  titulo: string().required('O assunto é obrigatório'),
  descricao: string().required('A avaliação é obrigatória'),
});

export type comentarioFormSchemaType = InferType<typeof comentarioFormSchema>;