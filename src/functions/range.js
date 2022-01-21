import { sum } from ".";

export const range = (a, b) => {
  const sumOfBA = sum(b, -a);
  if (sumOfBA === 0) return [b];
  if (sumOfBA === 1) return [a, b];

  const diffInt = parseInt(sumOfBA / 2);
  const breakPoint = sum(a, diffInt);
  return [...range(a, breakPoint), ...range(sum(breakPoint, 1), b)];
};
