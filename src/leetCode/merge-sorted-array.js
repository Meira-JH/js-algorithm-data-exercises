export const mockMergeSortedArray = {
  nums1: [1, 2, 3, 0, 0, 0, 0],
  m: 3,
  nums2: [2, 4, 6, 8],
  n: 4,
};

export function merge(nums1, m, nums2, n) {
  // copy nums2 to the end nums 1
  for (let i = 0; i < nums2.length; i++) {
    nums1[m + i] = nums2[i];
  }

  // bubble sort nums1
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums1.length - i - 1; j++) {
      //if nums1[j] > nums1[j + 1] swap
      if (nums1[j] > nums1[j + 1]) {
        let temp = nums1[j];
        nums1[j] = nums1[j + 1];
        nums1[j + 1] = temp;
      }
    }
  }
  return nums1;
}
