import { FieldError, RegisterOptions } from "react-hook-form";

import { errorMessages, IErrorMessages } from "./errors";

export interface IGetErrorMessageParams {
  error: Partial<FieldError>;
  options?: RegisterOptions;
  name?: string;
}

export type TGetErrorMessage = (params: IGetErrorMessageParams) => string;

export function getErrorMessage({
  error,
  options,
  name,
}: IGetErrorMessageParams): string {
  let errorMessage: IErrorMessages[keyof IErrorMessages] = "";

  if (error.message) {
    return error.message;
  }

  switch (error.type) {
    case "server":
      return errorMessages.server(name);

    default: {
      errorMessage = errorMessages[error.type as keyof IErrorMessages] ?? "";
    }
  }

  if (typeof errorMessage === "function") {
    return errorMessage(options?.[error.type as keyof RegisterOptions], name);
  }

  return errorMessage;
}
