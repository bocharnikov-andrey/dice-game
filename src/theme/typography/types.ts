import { Theme, Breakpoints } from "@mui/material/styles";
import "@mui/styles";
import React from "react";

export type TypographyVariant = {
  fontSize: number;
  fontWeight: "400" | "500" | "700";
};

export type TypographyVariants =
  | "h1"
  | "alertTitle"
  | "alertDescription"
  | "buttonLarge"
  | "tableHeader"
  | "subtitle2"
  | "body1"
  | "body2";


declare module "@mui/material/styles" {
  // tslint:disable-next-line:no-empty-interface
  interface DefaultTheme extends Theme {
    breakpoints: Breakpoints;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    h1: React.CSSProperties;
    alertTitle: React.CSSProperties;
    alertDescription: React.CSSProperties;
    buttonLarge: React.CSSProperties;
    tableHeader: React.CSSProperties;
    subtitle2: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h1: React.CSSProperties;
    alertTitle: React.CSSProperties;
    alertDescription: React.CSSProperties;
    buttonLarge: React.CSSProperties;
    tableHeader: React.CSSProperties;
    subtitle2: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1: true;
    alertTitle: true;
    alertDescription: true;
    buttonLarge: true;
    tableHeader: true;
    subtitle2: true;
    body1: true;
    body2: true;
  }
}
