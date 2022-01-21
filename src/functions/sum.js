import { toNumber } from ".";

export const sum = (a, b) => {
  const num1 = toNumber(a);
  const num2 = toNumber(b);

  return num1 + num2;
};
