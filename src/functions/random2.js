import { sum } from ".";

export const random2 = () => {
  const currentStamp = new Date() * 1;
  const stampArr = currentStamp.toString().split("");
  while (stampArr.length > 1) {
    stampArr.push(sum(stampArr.shift(), stampArr.shift()));
    if (stampArr.length === 1 && stampArr.toString().length > 1)
      stampArr.push(...stampArr.shift().toString().split(""));
  }
  if (stampArr[0].toString().length < 4)
    stampArr[0] = stampArr[0] + 10 * (4 - stampArr[0].toString().length);

  let [remainingNum, fourDigitNum] = ((stampArr[0] + currentStamp) / 10 ** 4)
    .toString()
    .split(".");
  if (fourDigitNum.length < 4) fourDigitNum = fourDigitNum + "0";

  return sum(
    "0." +
      sum(
        fourDigitNum.split("").reverse().join("") + fourDigitNum,
        remainingNum
      )
        .toString()
        .slice(1),
    0
  );
};
