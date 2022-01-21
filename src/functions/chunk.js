import { sum } from ".";

export const chunk = (arr, num) => {
  let count = num;
  let oneChunk = [];
  const chunks = [];
  const arrToBeChunked = [...arr];
  let arrLength = arrToBeChunked.length;

  while (count) {
    oneChunk.push(arrToBeChunked.shift());
    count = sum(count, -1);
    arrLength = arrToBeChunked.length;
    if (count === 0 || arrLength === 0) chunks.push(oneChunk);

    if (arrLength === 0) break;

    if (count === 0 && arrLength > 0) {
      count = num;
      oneChunk = [];
    }
  }

  if (chunks.length === 0) chunks.push(arr);

  return [...chunks];
};
