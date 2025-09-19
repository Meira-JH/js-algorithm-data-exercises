// Merge Sort is a sorting algorithm that operates on the principle of Divide and Conquer. It
// efficiently sorts a list by breaking it down into smaller sub-problems, solving those sub-problems,
// and then combining the solutions to form the final sorted list

// Here's how it works:

//     Divide:
//     The unsorted list is recursively divided into two halves until each sublist contains only one
//     element. A single-element list is inherently sorted.

//     Conquer (Sort):
//     These single-element sublists are then merged in a sorted manner. Adjacent pairs of
//     single-element lists are compared, ordered, and combined into sorted lists of two elements.

//     Combine (Merge):
//     This merging process continues recursively. Sorted sublists are repeatedly merged to produce
//    larger sorted sublists until a single, fully sorted list is obtained. The key to the merge step
//     is efficiently combining two already sorted lists into a new, larger sorted list.

export const mockMergeSort = {
  arrayToSort: [38, 27, 43, 3, 54, 9],
};

export function mergeSort(array) {
  if (array.length <= 1) return array;

  const midArray = Math.floor(array.length / 2);
  const leftDivision = mergeSort(array.slice(0, midArray));
  const rightDivision = mergeSort(array.slice(midArray));

  return merge(leftDivision, rightDivision);
}

function merge(leftDivision, rightDivision) {
  const sortedArray = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftDivision.length > leftIndex && rightDivision.length > rightIndex) {
    if (leftDivision[leftIndex] < rightDivision[rightIndex]) {
      sortedArray.push(leftDivision[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(rightDivision[rightIndex]);
      rightIndex++;
    }
  }

  while (leftDivision.length > leftIndex) {
    sortedArray.push(leftDivision[leftIndex]);
    leftIndex++;
  }

  while (rightDivision.length > rightIndex) {
    sortedArray.push(rightDivision[rightIndex]);
    rightIndex++;
  }

  return sortedArray;
}
