import { mergeSort, mockMergeSort } from './practice/mergeSort.js';

function main() {
  const result = mergeSort(mockMergeSort.arrayToSort);

  console.log('RESULT', result);
}

main();
