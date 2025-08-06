export function maxSubarraySum(array, numberOfSummations) {
  //first verify if number of summations is lower than
  //array length
  if (array.length < numberOfSummations) {
    return null;
  }

  let maxSum = -Infinity;
  let tempSum = 0;

  //now iterate through the first subarray of summations (window)
  //and store the value in a variable
  for (let [index, number] of array.entries()) {
    if (index === numberOfSummations) {
      break;
    }
    maxSum === -Infinity ? (maxSum = number) : (maxSum += number);
  }

  //make the first maxSum equal the tempSum
  tempSum = maxSum;

  //now iterate through array, begining at the posi
  for (let index = numberOfSummations; index < array.length; index++) {
    //on every loop the tempSum must be substituted by the substraction
    //of the first element of the window (arra[index - numberOfSummations])
    //and addition of the last element of the window (array[index])
    tempSum = tempSum - array[index - numberOfSummations] + array[index];
    console.log(array[index - numberOfSummations], array[index]);

    if (maxSum < tempSum) {
      maxSum = tempSum;
    }
  }

  return maxSum;
}

//find the smallest subarray which the elements summed have
//an equal or greater value than the value of an argument

export function subarrayLengthSumIsEqualOrGreater(array, comparativeValue) {
  //defines size of the subArray
  let subArrayLength = 1;
  let subarrayStart = 0;
  let subarrayEnd = subArrayLength - 1;
  let tempSum = 0;

  //loops the array
  while (subArrayLength <= array.length) {
    //checks if there is any individual number
    // >= the comparative value

    //loops the subarray summing elements
    for (let i = subarrayStart; i <= subarrayEnd; i++) {
      tempSum = tempSum + array[i];
    }
    //checks if sum should return
    if (tempSum >= comparativeValue) return subArrayLength;

    //if not, resets sum
    tempSum = 0;

    //if the window is in the last position of the input array,
    //moves the window to the beggining and adds 1 length to it
    if (subarrayEnd === array.length - 1) {
      ++subArrayLength;
      subarrayStart = 0;
      subarrayEnd = subArrayLength - 1;
    }
    //if the window isnt in the last position, slides it
    //one position to the right
    if (subarrayEnd < array.length - 1) {
      ++subarrayStart;
      ++subarrayEnd;
    }
  }

  //returns 0 if no match is found
  return 0;
}
