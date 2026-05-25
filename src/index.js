import { mockCharactersOfString, mockRepeatedA, repeatedAinString, twoSumExistence, twoSumExistenceMock } from './algEasy/3-problem-solving-patterns/hashmapsAndSet.js';
import {
  deleteDuplicates,
  mockDeleteDuplicatesList,
} from './hackerRank/softwareEngineerPrepKit/deleteDuplicates.js';
import { merge, mockMergeSortedArray } from './leetCode/merge-sorted-array.js';
import { mockRemoveElement, removeElement } from './leetCode/remove-element.js';

function main() {
  const result = twoSumExistence(twoSumExistenceMock.nums, twoSumExistenceMock.target);

  console.dir(result, { depth: null });
}

main();
