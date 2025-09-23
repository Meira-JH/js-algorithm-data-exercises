import { bubbleSort, mockBubbleSort } from './practice/bubbleSort.js';

function main() {
  const result = bubbleSort(mockBubbleSort.arrayToSort);

  console.log('RESULT', result);
}

main();
