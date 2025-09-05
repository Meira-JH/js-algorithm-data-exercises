// x === p(p(y))

export const mockPermutation = [5, 2, 1, 3, 4];
// x === 1, 1 === p(3), 3 === p(4), y === 4
// x === 2, 2 === p(2), 2 === p(2), y === 2
// x === 3, 3 === p(4), 4 === p(5), y === 5 ...

export function permutationEquation(p) {
  const dictionaryXValueToPosition = {};
  const valuesOfY = [];
  for (let i = 0; i < p.length; i++) {
    dictionaryXValueToPosition[p[i]] = i + 1;
  }

  for (let x = 1; x <= p.length; x++) {
    valuesOfY[x - 1] =
      dictionaryXValueToPosition[dictionaryXValueToPosition[x]];
  }

  return valuesOfY;
}
