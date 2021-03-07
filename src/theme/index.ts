import {
  createSpacing,
  createBreakpoints,
  createPalette,
  createTypography,
} from "./utils";
import {
  BORDERS,
  SPACING,
  BREAKPOINTS,
  COLORS,
  TYPOGRAPHY,
  SHADOWS,
} from "./values";

const theme = {
  spacing: createSpacing(SPACING),
  breakpoints: createBreakpoints(BREAKPOINTS),
  palette: createPalette(COLORS),
  typography: createTypography(TYPOGRAPHY),
  border: BORDERS,
  shadows: SHADOWS,
};

export default theme;
