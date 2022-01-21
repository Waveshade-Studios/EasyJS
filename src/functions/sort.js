export const sort = (arr) => {
  if (arr.length <= 1) return arr;

  const left = [];
  const mid = [];
  const right = [];

  arr.forEach((num) => {
    if (num < arr[0]) left.push(num);
    if (num === arr[0]) mid.push(num);
    if (num > arr[0]) right.push(num);
  });

  return [...sort(left), ...mid, ...sort(right)];
};
