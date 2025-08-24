// Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. She calls the number beautiful if the difference is evenly divisible by k.

// Given a range of numbered days and a number k, determine the number of beautiful days in the range.

// Function Description

// Complete the beautifulDays function.

// Function Description

// Complete the beautifulDays function.

// beautifulDays has the following parameters:
// int i: the starting day number
// int j: the ending day number
// int k: the divisor

// Returns

// int: the number of beautiful days in the range

// Input Format

// A single line of three space-separated integers: i, j, and k.

// Constraints

// 1 ≤ i ≤ j ≤ 2 × 10⁶
// 1 ≤ k ≤ 2 × 10⁹

export const beaultifulDayMock = {
  startingDay: 20,
  endDay: 23,
  k: 6,
};

function isDayBeautiful(day, dayReverse, k) {
  const result = (Number(day) - Number(dayReverse)) % k;

  if (result === 0) {
    return true;
  } else {
    return false;
  }
}

export function beautifulDayAtTheMovie(i, j, k) {
  let dayCounter = i;
  let beaultifulDayCounter = 0;
  while (dayCounter <= j) {
    const dayString = `${dayCounter}`;
    let reverseDayString = '';

    for (let i = 0; i < dayString.length; i++) {
      reverseDayString = dayString[i] + reverseDayString;
    }

    if (isDayBeautiful(dayCounter, reverseDayString, k)) {
      beaultifulDayCounter++;
    }

    dayCounter++;
  }

  return beaultifulDayCounter;
}
