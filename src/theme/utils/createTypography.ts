import { CSSProperties } from "react";

const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';

type VariantKeys =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "subtitle1"
  | "subtitle2"
  | "caption"
  | "overline";

type VariantOptions = Pick<
  CSSProperties,
  | "fontSize"
  | "fontWeight"
  | "lineHeight"
  | "textTransform"
  | "letterSpacing"
  | "color"
>;

interface Typography {
  fontFamily?: string;
  fontSize?: number;
  fontWeightLight?: number;
  fontWeightRegular?: number;
  fontWeightMedium?: number;
  fontWeightBold?: number;
  htmlFontSize?: number;
  variants: Record<VariantKeys, VariantOptions>;
}

const createTypography = (typography: Typography) => {
  const {
    fontFamily = defaultFontFamily,
    fontSize = 14,
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    htmlFontSize = 16,
    variants,
  } = typography;

  const coef = fontSize / 14;
  const pxToRem = (size: number) => `${(size / htmlFontSize) * coef}rem`;

  return {
    htmlFontSize,
    pxToRem,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
    ...variants,
  };
};

export default createTypography;
