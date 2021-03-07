type Colors = {
  [key: string]: string;
};

const createPalette = (colors: Colors) => {
  return {
    common: {
      white: colors.white,
      black: colors.black,
    },
    text: {
      primary: colors.white,
      primaryLight: colors.textPrimaryLight,
    },
    background: colors.background,
    border: colors.lightGray,
  };
};

export default createPalette;
