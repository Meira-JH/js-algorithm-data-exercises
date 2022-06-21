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

export function powerFunction(base, exponent) {
    let isBaseZero = true;
    if (!exponent && isBaseZero) {
        return 1;
    }
    if (!exponent && !isBaseZero) {
        return base;
    }
    if (exponent) {
        isBaseZero = false;
        return base * powerFunction(base, exponent - 1);
    }
}

export function factorial(number) {
    if (number <= 1) return 1;
    if (number < 0) return 0;

    return number * factorial(number - 1);
}

//write a function that receives an index
//and returns a number in the fibonacci sequence

export function findFibonacciIndex(index) {
    if (index <= 2) return 1;
    return findFibonacciIndex(index - 1) + findFibonacciIndex(index - 2);
}

//function that returns product of all elements of array
//with array argument destructuring
export function productOfArray([firstNumber, ...restOfArgument]) {
    if (!restOfArgument.length) {
        return firstNumber || 0;
    }
    return firstNumber * productOfArray(restOfArgument);
}

//function that returns the sum of all numbers
//in sequence from 0 to the number of the input

export function recursiveRange(number) {
    if (number === 0) return 0;

    return recursiveRange(number - 1) + number;
}
