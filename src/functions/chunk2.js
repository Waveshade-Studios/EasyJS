import { indexing } from "./indexing";

export const chunk2 = (arr, num) => {
  const results = [];
  if (num < 1 || arr.length <= 1 || arr.length <= num) results.push(arr);
  else
    indexing(arr.length, num).forEach((set) => results.push(arr.slice(...set)));

  return [...results];
};
