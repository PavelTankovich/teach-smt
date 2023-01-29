import { ThemeOptions } from "@mui/material";

export const palette: NonNullable<ThemeOptions["palette"]> = {
  primary: {
    light: "#5c6bc0",
    main: "#3f51b5",
    dark: "#303f9f",
    contrastText: "#ffffff",
  },
  secondary: {
    light: "#ff7961",
    main: "#f44336",
    dark: "#ba000d",
    contrastText: "#ffffff",
  },
  error: {
    light: "#ff5252",
    main: "#f44336",
    dark: "#c51162",
    contrastText: "#ffffff",
  },
  success: {
    light: "#81c784",
    main: "#4caf50",
    dark: "#388e3c",
    contrastText: "#ffffff",
  },
  warning: {
    light: "#ffd54f",
    main: "#ffb900",
    dark: "#ff8f00",
    contrastText: "#000000",
  },
  info: {
    light: "#64b5f6",
    main: "#2196f3",
    dark: "#1976d2",
    contrastText: "#ffffff",
  },
  text: {
    primary: "#333333",
    secondary: "#666666",
    disabled: "#9b9b9b",
  },
  background: {
    default: "#f5f5f5",
    paper: "#ffffff",
  },
  action: {
    active: "#3f51b5",
    hover: "#303f9f",
    selected: "#1976d2",
    disabled: "#9b9b9b",
    disabledBackground: "#9b9b9b",
  },
};
