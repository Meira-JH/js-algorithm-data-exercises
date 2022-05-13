export function maxSubarraySum(array, numberOfSummations) {
    //first verify if number of summations is lower than
    //array length
    if (array.length < numberOfSummations) {
        return false;
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
