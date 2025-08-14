// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.
// Example

// There are two subarrays meeting the criterion: [4, 4, 4, 4] and [4, 4, 4, 3]. The maximum length subarray has 4 elements.

// Function Description
// Complete the pickingNumbers function in the editor below.
// pickingNumbers has the following parameter(s):

//     int a[n]: an array of integers

// Returns

//     int: the length of the longest subarray that meets the criterion

// Input Format

// The first line contains a single integer
// , the size of the array .
// The second line contains space-separated integers, each an element of the array .

export function pickingNumbers(a) {
  const countOfEachNumber = {};
  let maxLength = 0;
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    if (countOfEachNumber[a[i]]) {
      countOfEachNumber[a[i]]++;
    } else {
      countOfEachNumber[a[i]] = 1;
    }
  }

  for (const key in countOfEachNumber) {
    count = countOfEachNumber[key] + (countOfEachNumber[Number(key) + 1] || 0);
    maxLength = Math.max(count, maxLength);
    count = 0;
  }

  console.log('countOfEachNumber', countOfEachNumber);
  console.log('maxLength', maxLength);
  return maxLength;
}

export const mockArray = [4, 6, 5, 3, 3, 1];
