import {ThemeOptions} from "@mui/material";

export const spacing: NonNullable<ThemeOptions["spacing"]> = (factor: number) => {
  // 4px if the factor is 1
  return `${0.25 * factor}rem`;
};
