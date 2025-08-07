// A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return .
// Function Description

// Complete the getMoneySpent function in the editor below.

// getMoneySpent has the following parameter(s):

//     int keyboards[n]: the keyboard prices
//     int drives[m]: the drive prices
//     int b: the budget

// Returns

//     int: the maximum that can be spent, or

//     if it is not possible to buy both items

// Input Format

// The first line contains three space-separated integers
// , , and , the budget, the number of keyboard models and the number of USB drive models.
// The second line contains space-separated integers , the prices of each keyboard model.
// The third line contains space-separated integers , the prices of the USB drives.

const keyboards = [3, 1];
const drives = [5, 2, 8];
const b = 10;

export function getMoneySpent(keyboards, drives, b) {
  let mostExpensiveCombo = 0;

  //iterate each keyboard and sums with every drive
  for (let keyboardIndex = 0; keyboardIndex < b; keyboardIndex++) {
    for (let driveIndex = 0; driveIndex < drives.length; driveIndex++) {
      const currentCombo = keyboards[keyboardIndex] + drives[driveIndex];

      if (currentCombo <= b && currentCombo > mostExpensiveCombo) {
        //stores max value if lower or equal than budget and higher than previous max
        mostExpensiveCombo = currentCombo;
      }
    }
  }
  if (!mostExpensiveCombo) {
    return -1;
  }
  // returns the cost of the most expensive usb and board to given budget or -1 if not possible
  return mostExpensiveCombo;
}
