// Count Elements Greater Than Previous Average

// Given an array of positive integers, return the number of elements that
// are strictly greater than the average of all previous elements. Skip the
// first element.

export const mockCountGreater = {
  array: [
    38, 27, 43, 3, 54, 9, 345, 123, 1, 689, 12345, 12, 4, 6, 27, 8, 34, 7, 78,
    345, 345, 3, 689,
  ],
};

export function CountElementsGreaterThenPrevious(responseTimes) {
  if (responseTimes.length <= 1) return 0;

  const greaterElements = [];
  let elementsSum = 0;

  for (let i = 1; i < responseTimes.length; i++) {
    elementsSum += responseTimes[i - 1];
    const newAverage = elementsSum / i;
    if (responseTimes[i] > parseFloat(newAverage.toFixed(2))) {
      greaterElements.push(responseTimes[i]);
    }
  }

  return greaterElements.length;
}
