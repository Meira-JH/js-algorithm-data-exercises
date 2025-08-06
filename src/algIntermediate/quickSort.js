function pivot(array, startPosition = 0, endPosition = array.length + 1) {
  let pivot = array[startPosition];
  let swapIndex = startPosition;

  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  for (let i = startPosition + 1; i <= endPosition; i++) {
    if (pivot > array[i]) {
      ++swapIndex;
      swap(array, swapIndex, i);
    }
  }

  swap(array, startPosition, swapIndex);
  return swapIndex;
}

export function quickSort(array, leftSide = 0, rightSide = array.length - 1) {
  //if index of left side is equal or bigger than
  //the right side, interrupts recurssion
  if (leftSide < rightSide) {
    //find the pivot index
    //this pivot function works with start position
    //at the beginning of the array
    let pivotIndex = pivot(array, leftSide, rightSide);
    //iterate the left side untill its length
    // === right side length
    quickSort(array, leftSide, pivotIndex - 1);
    //iterate through right side
    quickSort(array, pivotIndex + 1, rightSide);
  }
  //when both sides are sorted, returns the array
  return array;
}
