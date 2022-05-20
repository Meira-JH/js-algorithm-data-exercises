//find odd number in array

export function findOddNumbers(array) {
    //defines the result array
    let result = [];
    //checks if array is empty
    //if it is, returns the return array
    if (array.length === 0) {
        return result;
    }

    //checks if first number is odd
    if (array[0] % 2 !== 0) {
        result.push(array[0]);
    }

    //concatenate the result with the input
    //slicing the last element and putting
    //in the stack
    result = result.concat(findOddNumbers(array.slice(1)));

    return result;
}
