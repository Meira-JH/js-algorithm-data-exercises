import {
  deleteDuplicates,
  mockDeleteDuplicatesList,
} from './hackerRank/softwareEngineerPrepKit/deleteDuplicates.js';
import { merge, mockMergeSortedArray } from './leetCode/merge-sorted-array.js';
import { mockRemoveElement, removeElement } from './leetCode/remove-element.js';

function main() {
  const result = removeElement(mockRemoveElement.nums, mockRemoveElement.val);

  console.dir(result, { depth: null });
}

main();
