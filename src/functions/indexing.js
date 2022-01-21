import { sum } from ".";

export const indexing = (total, breakPoint) => {
  let divisions = total / breakPoint;
  let divisionInt = parseInt(divisions);
  divisions = divisions - divisionInt ? sum(divisionInt, 1) : divisions;
  const indexes = [];
  for (let i = 0; i < divisions; i++) {
    indexes.push([i * breakPoint, i * breakPoint + breakPoint]);
  }

  return indexes;
};
