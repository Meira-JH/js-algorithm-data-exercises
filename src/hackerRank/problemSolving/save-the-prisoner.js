// A jail has n prisoners, and each prisoner has a unique ID number from 1 to n. There are m sweets to distribute. The distribution starts with prisoner number s and proceeds sequentially around the table (prisoner s, s+1, ..., n, 1, 2, ...), one sweet at a time. The last sweet is poisoned.

// Given n, m, and s, determine the ID of the prisoner who will receive the poisoned sweet.

// Input Format

// The first line contains an integer t, the number of test cases.
// Each of the next t lines contains three space-separated integers: n (number of prisoners), m (number of sweets), and s (starting prisoner ID).
// Constraints
// 1 ≤ t ≤ 100
// 1 ≤ n ≤ 10⁹
// 1 ≤ m ≤ 10⁹
// 1 ≤ s ≤ n

// Output Format
// For each test case, print the ID of the prisoner who receives the poisoned sweet.

// Sample Input
// 2
// 5 2 1
// 5 2 2

// Sample Output
// 2
// 3

// Explanation

// In the first test case, sweets are distributed to prisoners 1 and 2. Prisoner 2 gets the poisoned sweet.
// In the second test case, sweets are distributed to prisoners 2 and 3. Prisoner 3 gets the poisoned sweet.

export const saveThePrisonerMock = {
  n: 7,
  m: 19,
  s: 2,
};

// export function saveThePrisoner(n, m, s) {
//   const numberOfPrisoners = n;
//   const candyQuantity = m;
//   const startPosition = s;
//   let distributionCounter = 1;
//   let tablePointer = startPosition;

//   while (distributionCounter < candyQuantity) {
//     if (tablePointer === numberOfPrisoners) {
//       tablePointer = 0;

//       continue;
//     }
//     distributionCounter += 1;
//     tablePointer += 1;
//   }

//   console.log('tablePointer', tablePointer);
//   return tablePointer;
// }

export function saveThePrisoner(n, m, s) {
  if (m < n && s === 1) {
    return m;
  }

  const numberOfPrisoners = n;
  const candyQuantity = m;
  const startPosition = s - 1;

  const poisonedCandyPosition =
    (candyQuantity + startPosition) % numberOfPrisoners;

  if (poisonedCandyPosition === 0) {
    return numberOfPrisoners;
  } else {
    return poisonedCandyPosition;
  }
}
