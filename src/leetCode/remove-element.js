export const mockRemoveElement = {
  nums: [1, 2, 3, 1, 2, 2, 2],
  val: 2,
};

export function removeElement(nums, val) {
  let leftPointer = 0;
  let rightPointer = 0;

  while (rightPointer < nums.length) {
    //check if nums[i] === val
    // if yes, change element leftPointer by rightPointer and underscore rightPointer
    if (nums[rightPointer] !== val) {
      nums[leftPointer] = nums[rightPointer];
      nums[rightPointer] = '_';
      leftPointer++;
      rightPointer++;
    } else {
      // else just underscore
      nums[rightPointer] = '_';
      rightPointer++;
    }
  }

  console.log(nums);
  return leftPointer;
}
