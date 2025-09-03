export const circularArrayMock = {
  numberOfRotations: 91,
  positionsToShow: [3, 5],
  array: [7, 2, 5, 3, 67, 9, 0, 214],
};

export function circularArrayRotation(a, k, queries) {
  const array = a;
  const numberOfRotations = k % array.length;
  const positionsToShow = queries;
  let rotatedArray = [];

  for (let i = 1; i <= numberOfRotations; i++) {
    rotatedArray.unshift(array[array.length - 1]);
    array.pop();
  }
  rotatedArray = [...rotatedArray, ...array];

  return positionsToShow.map((position) => rotatedArray[position]);
}
