import { random2, sum, toNumber } from ".";

export const randomNumber2 = (a, b) => {
  const numa = toNumber(a);
  const numb = toNumber(b);
  let num1 = 0;
  let num2 = 0;

  if (numa === numb) return numa;
  if (numb < numa) {
    num1 = numb;
    num2 = numa;
  } else {
    num1 = numa;
    num2 = numb;
  }

  return parseInt(sum(random2() * sum(sum(num2, -num1), 1), num1));
};
