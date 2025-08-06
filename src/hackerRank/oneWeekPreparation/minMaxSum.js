//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

export function minMaxSum(arr) {
  //only positive int
  //find four biggest
  //find four lowest
  let maxNumber = 0;
  let minNumber = Infinity;
  let sumOfAll = 0;
  for (let number of arr) {
    if (number < 0 || arr.length !== 5) return null;
    if (number > maxNumber) maxNumber = number;
    if (number <= minNumber) minNumber = number;
    //if number is bigger than 32bit, use BigInt
    if ((sumOfAll += number > 0x7fffffff)) {
      BigInt((sumOfAll += number));
    } else {
      sumOfAll += number;
    }
  }

  //print both i a single line space separated
  //reducing the max number from total for minSum and the min number for maxSum
  console.log(sumOfAll - maxNumber, sumOfAll - minNumber);
}
