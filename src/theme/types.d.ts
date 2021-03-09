declare module "theme" {
  export type Theme = typeof import("./index").default;

  export type Colors = typeof import("./values").COLORS;
}
