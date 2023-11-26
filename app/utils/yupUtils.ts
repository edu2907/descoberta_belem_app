import { ValidationError } from "yup";

export function parseValidationError(validationError: ValidationError) {
  const newError = {};
  validationError.inner.forEach((err) => {
    newError[err.path] = { message: err.message };
  });
  return newError;
}