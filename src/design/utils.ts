import theme from "./theme";

export const toRem: (n: number) => string = (n: number) =>
  `${n / theme.rem}rem`;
