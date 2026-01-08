import {
  deleteDuplicates,
  mockDeleteDuplicatesList,
} from './hackerRank/softwareEngineerPrepKit/deleteDuplicates.js';
import { merge, mockMergeSortedArray } from './leetCode/merge-sorted-array.js';

function main() {
  const result = merge(
    mockMergeSortedArray.nums1,
    mockMergeSortedArray.m,
    mockMergeSortedArray.nums2,
    mockMergeSortedArray.n
  );

  console.dir(result, { depth: null });
}

main();
