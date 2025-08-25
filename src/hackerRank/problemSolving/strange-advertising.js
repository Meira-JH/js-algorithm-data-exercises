// Strange Advertising - Problem Statement

// Every day, a viral advertisement is shared with exactly 5 people. On each subsequent day, half of the recipients (rounded down) like the advertisement and share it with 3 new friends. This process continues for a given number of days.

// Given the number of days, calculate the cumulative number of people who have liked the advertisement at the end of that period.

// Input Format
// A single integer, n, denoting the number of days.

// Constraints
// 1 ≤ n ≤ 50

// Output Format
// Print the cumulative number of people who have liked the ad.

// Sample Input

// Sample Output

// Explanation

// Day 1: 5 people receive the ad, floor(5/2) = 2 like it.
// Day 2: 2 × 3 = 6 people receive the ad, floor(6/2) = 3 like it.
// Day 3: 3 × 3 = 9 people receive the ad, floor(9/2) = 4 like it.
// Total likes = 2 + 3 + 4 = 9

export function strangeAdvertising(n) {
  const numberOfAdvertisedDays = n;
  let shared = 5;
  let cumulativeLikes = 0;

  for (let i = 0; i < numberOfAdvertisedDays; i++) {
    const liked = Math.floor(shared / 2);
    cumulativeLikes += liked;
    shared = liked * 3;
  }

  console.log('cumulative likes', cumulativeLikes);
  return cumulativeLikes;
}
