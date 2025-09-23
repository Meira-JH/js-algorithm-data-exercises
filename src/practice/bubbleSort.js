export const mockBubbleSort = {
  arrayToSort: [
    38, 27, 43, 3, 54, 9, 345, 123, 1, 689, 12345, 12, 4, 6, 27, 8, 34, 7, 78,
    345, 345, 3, 689,
  ],
};

export function bubbleSort(array) {
  let isArraySorted = false;
  let hasLoopSwaped = false;
  let i = 0;
  let tempElement = null;

  while (!isArraySorted) {
    console.log('array', array);

    if (array[i] > array[i + 1] && i < array.length - 1) {
      tempElement = array[i];
      array[i] = array[i + 1];
      array[i + 1] = tempElement;
      hasLoopSwaped = true;
    }

    i++;

    if (i === array.length - 1) {
      if (!hasLoopSwaped) isArraySorted = true;
      i = 0;
      hasLoopSwaped = false;
    }
  }

  return array;
}
