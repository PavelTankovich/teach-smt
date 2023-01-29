export interface IErrorMessages {
  required: string;
  mask: <TValue>(value: TValue, name?: string) => string;
  minLength: <TValue>(value: TValue, name?: string) => string;
  maxLength: <TValue>(value: TValue, name?: string) => string;
  server: (name?: string) => string;
  maxAmount: (minSize?: string, maxSize?: string) => string;
  minAmount: (minSize?: string) => string;
}

export const errorMessages: IErrorMessages = {
  required: "The field is required",
  mask: (value, name): string =>
    `${name ?? "The field"} must be ${value} ${
      Number(value) > 1 ? "digits" : "digit"
    }`,
  minLength: (value, name): string =>
    `${name ?? "The field"} must be at least ${value} ${
      Number(value) > 1 ? "digits" : "digit"
    }`,
  maxLength: (value, name): string =>
    `${name ?? "The field"} cannot exceed ${value} ${
      Number(value) > 1 ? "digits" : "digit"
    }`,
  server: (name): string => `Invalid ${name ?? "value"}`,
  maxAmount: (minSize?: string, maxSize?: string): string =>
    `Can’t be greater than ${minSize}, except ${maxSize}`,
  minAmount: (minSize?: string): string => `Can't be lower than ${minSize}`,
};
