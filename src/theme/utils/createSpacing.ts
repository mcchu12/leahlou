type Spacing = (...arg: number[]) => number | string;

const createSpacing = (spacing: number): Spacing => (...arg) => {
  if (!(arg.length <= 4)) {
    return 0;
  }

  const transform = (factor: number) => spacing * factor;

  if (arg.length === 0) return transform(1);

  if (arg.length === 1) return transform(arg[0]);

  return arg
    .map((factor) => {
      const output = transform(factor).toString();
      return "".concat(output, "px");
    })
    .join(" ");
};

export default createSpacing;
