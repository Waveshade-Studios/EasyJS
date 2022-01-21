const concatOutcomes = (first, arr) => {
  const results = [];

  arr.forEach((rest) => {
    results.push([first, ...rest]);
  });

  return [...results];
};

const permute = (arr) => {
  const arrCopy = [...arr];
  if (arr.length === 2) return [[...arrCopy], [...arrCopy.reverse()]];

  let count = arr.length - 1;
  const samples = [[...arrCopy]];
  while (count) {
    arrCopy.push(arrCopy.shift());
    samples.push([...arrCopy]);
    count -= 1;
  }

  const results = [];
  samples.forEach((sample) => {
    results.push(...concatOutcomes(sample.shift(), permute(sample)));
  });

  return [...results];
};

export const permutations = (arr) => {
  if (arr.length <= 1) return arr;

  return [...permute(arr)];
};
