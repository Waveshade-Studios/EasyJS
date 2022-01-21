export const toNumber = (a) => {
  if (!a || isNaN(Number(a))) return 0;
  return Number(a);
};
