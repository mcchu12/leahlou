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
  common: {
    white: "#FFFFFF",
    black: "#000000",
  },
  background: {
    paper: "#FDFEFF"
  },
  text: {
    primary: '#333333',
    secondary: '#8D8D8D',
    primaryOnDark: '#FDFEFF'
  },
  lightGray: "#4a4a4a",
};

export const TYPOGRAPHY = {
  fontFamily: '"Poppins", sans-serif;',
  variants: {
    h1: {
      fontSize: "6em",
      fontWeight: 500,
      lineHeight: 1.167,
    },
    h2: {
      fontSize: "3.75em",
      fontWeight: 400,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "3em",
      fontWeight: 400,
      lineHeight: 1.167,
    },
    h4: {
      fontSize: "2.125em",
      fontWeight: 600,
      lineHeight: 1.235,
    },
    h5: {
      fontSize: "1.5em",
      fontWeight: 600,
      lineHeight: 1.6,
      letterSpacing: "1.25px",
    },
    h6: {
      fontSize: "1.25em",
      fontWeight: 600,
      lineHeight: 1.6,
      letterSpacing: 0.2,
    },
    body1: {
      fontSize: "1em",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.25px",
    },
    body2: {
      fontSize: "0.875em",
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: "0.5px",
    },
    subtitle1: {
      fontSize: "1.25em",
      fontWeight: 400,
      lineHeight: 1.75,
    },
    subtitle2: {
      fontSize: "0.875em",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    button: {
      fontSize: "0.875em",
      lineHeight: 1.75,
    },
    caption: {
      fontSize: "0.75em",
      fontWeight: 400,
      lineHeight: 1.66,
    },
    overline: {
      fontSize: "0.625em",
      fontWeight: 400,
      textTransform: "uppercase" as const,
      lineHeight: 2.33,
      letterSpacing: "0.67px",
    },
  },
};
