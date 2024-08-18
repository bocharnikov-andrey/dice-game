'use client'

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: "96px",
      fontWeight: 300,
    },
    alertTitle: {
      fontSize: "16px",
      fontWeight: 500,
    },
    alertDescription: {
      fontSize: "14px",
      fontWeight: 500,
    },
    buttonLarge: {
      fontSize: "15px",
      fontWeight: 500,
    },
    tableHeader: {
      fontSize: "14px",
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: 500,
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
    },
  },
});

export default theme;
