// There is a large pile of socks that must be paired by color. Given an ar of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example:
// There is one pair of color and one of color . There are three odd socks left, one of each color. The number of pairs is
// Function Description:
// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

//     int n: the number of socks in the pile
//     int ar[n]: the colors of each sock

// Returns
//     int: the number of pairs

// Input Format
// The first line contains an integer
// , the number of socks represented in .
// The second line contains space-separated integers,
// , the colors of the socks in the pile.

export function salesByMatch(ar) {
  const n = ar.length;

  //ar for counting each sock color
  const arrayForCountingSocksColors = [];
  //matching pairs counter
  let matchingPairs = 0;

  //iterate the ar to count
  for (let i = 0; i < n; i++) {
    if (arrayForCountingSocksColors[ar[i]]) {
      arrayForCountingSocksColors[ar[i]]++;
    } else {
      arrayForCountingSocksColors[ar[i]] = 1;
    }
  }

  for (const sockColor of arrayForCountingSocksColors) {
    //if 1 continue
    if (sockColor === 1 || !sockColor) {
      continue;
    } //if reminder 2 === 0 count half
    if (sockColor % 2 === 0) {
      matchingPairs += sockColor / 2;

      //else subtract 1 and count half
    } else {
      matchingPairs += (sockColor - 1) / 2;
    }
  }
  // how many  matching pairs are there?
  console.log('MATCHING PAIRS:', matchingPairs);
  return matchingPairs;
}
