import {ThemeOptions} from "@mui/material";

export const typography: NonNullable<ThemeOptions["typography"]> = () => ({
  allVariants: {
    letterSpacing: 0,
    fontWeight: 400,
  },
  fontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 900,
  h1: {
    fontSize: "4rem",
    fontWeight: 800,
  },
  h2: {
    fontSize: "3rem",
    fontWeight: 800,
  },
  h3: {
    fontSize: "2.5rem",
    fontWeight: 600,
  },
  h4: {
    fontSize: "2rem",
    fontWeight: 600,
  },
  h5: {
    fontSize: "1.5rem",
    fontWeight: 600,
  },
  h6: {
    fontSize: "1.25rem",
    fontWeight: 600,
  },
  body1: {
    fontSize: "1rem",
    fontWeight: 400,
  },
  body2: {
    fontSize: "1.25rem",
    fontWeight: 400,
  },
  caption: {
    fontSize: "0.875rem",
    fontWeight: 400,
  },
  button: {
    fontSize: "1rem",
    fontWeight: 600,
    textTransform: "uppercase",
  },
  overline: {
    fontSize: "0.75rem",
    fontWeight: 400,
    textTransform: "uppercase",
  },
});
