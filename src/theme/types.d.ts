declare module "theme" {
  export type Theme = typeof import("./index").default;
}
