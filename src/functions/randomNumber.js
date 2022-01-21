import { random, sum } from ".";

export const randomNumber = (a, b) => {
  if (!a) return NaN;
  const num1 = !b ? 0 : Number(a);
  const num2 = !b ? Number(a) : Number(b);

  if (isNaN(num1) || isNaN(num2)) return NaN;
  return parseInt(sum(random() * sum(sum(num2, -num1), 1), num1));
};
