export const SPACING = 8;

export const BORDERS = {
  radius: 8,
};

export const SHADOWS = {
  default: `0 1px 2px rgba(0, 0, 0, 0.1)`,
};

export const BREAKPOINTS = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  unit: "px",
  step: 5,
};

export const COLORS = {
  white: "#FFFFFF",
  black: "#000000",
  background: "#171717",
  textPrimary: "#000000",
  textPrimaryLight: "#CFCFCF",
  lightGray: "#4a4a4a",
};

export const TYPOGRAPHY = {
  fontFamily: '"Quicksand", sans-serif;',
  variants: {
    h1: {
      fontSize: "6rem",
      fontWeight: 300,
      lineHeight: 1.167,
    },
    h2: {
      fontSize: "3.75rem",
      fontWeight: 300,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "3rem",
      fontWeight: 400,
      lineHeight: 1.167,
    },
    h4: {
      fontSize: "2.125rem",
      fontWeight: 400,
      lineHeight: 1.235,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: "1.25px",
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: 0.2,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.75px",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: "0.5px",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.75,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    button: {
      fontSize: "0.875rem",
      lineHeight: 1.75,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.66,
    },
    overline: {
      fontSize: "0.625rem",
      fontWeight: 400,
      textTransform: "uppercase" as const,
      lineHeight: 2.33,
      letterSpacing: "0.67px",
    },
  },
};
