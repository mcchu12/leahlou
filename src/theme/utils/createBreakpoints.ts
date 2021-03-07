type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

type BreakpointValues = { [key in Breakpoint]: number };

type BreakpointsOptions = {
  values: BreakpointValues;
  unit: string;
  step: number;
};

const keys: Breakpoint[] = ["xs", "sm", "md", "lg", "xl"];

const createBreakpoints = (options: BreakpointsOptions) => {
  const { values, unit, step } = options;

  const getValues = (key: Breakpoint) => values[key];

  // Equal or greater than breakpoint value
  const up = (key: Breakpoint): string =>
    `@media (min-width:${values[key]}${unit})`;

  // Step smaller from next breakpoint value
  const down = (key: Breakpoint): string => {
    const endIndex = keys.indexOf(key) + 1;

    if (endIndex === keys.length) {
      return up("xs");
    }

    const upperbound = values[keys[endIndex]];

    return `@media (max-width:${upperbound - step / 100}${unit})`;
  };

  // Equal or greater than start value and step smaller than next
  // breakpoint after end
  const between = (start: Breakpoint, end: Breakpoint): string => {
    const endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) return up(start);

    return `@media (min-width:${values[start]}${unit}) and @media (max-width:${
      values[keys[endIndex + 1]] - step / 100
    }${unit})`;
  };

  // Only
  const only = (key: Breakpoint): string => between(key, key);

  return {
    values: getValues,
    up,
    down,
    between,
    only,
  };
};

export default createBreakpoints;
