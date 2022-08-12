//COMPARISON ALGORITHM
/* 
O(2n)
It separates numbers in buckets related to the last digit
of the number
ex:
bucket 0: 10, 100, 2310, 205203495019250
bucket 1: 11, 121, 12253461, 23425736572346524574581
[...]
bucket 9: 23519, 9, 23450624509379, 69
*/

function getDigitOfNumber(number, indexOfDigit) {
    //use Math.abs to handle negative numbers
    //use Math.pow to isolate the number after
    //the digit we want to find
    //divide the number by 10 and discover the number by the rest of the operation
    return Math.floor((Math.abs(number) / Math.pow(10, indexOfDigit)) % 10);
}

function findMajorQuantityOfDigits(arrayOfNumbers) {
    function countDigits(number) {
        if (number === 0) return 1;
        //10 to what power returns the aproximate
        //absolute number that we want to count its digits?
        return Math.floor(Math.log10(Math.abs(number))) + 1;
    }

    let majorDigits = 0;

    //iterate through array and compare digit count
    //of each number
    for (let number of arrayOfNumbers) {
        const digitsOfNumber = countDigits(number);
        if (digitsOfNumber > majorDigits) {
            majorDigits = digitsOfNumber;
        }
    }

    return majorDigits;
}

export function radixSort(array) {
    //1.a.discover largest digits number
    let maxDigits = findMajorQuantityOfDigits(array);
    //2.a.iterate through array same number of times
    //2.b.of the quantity of digits
    for (let digit = 0; digit < maxDigits; digit++) {
        //3.a.create a bucket for each digit (0 to 9)
        //3.b.place each number in its corresponding bucket
        //3.c.replace the existing array for the array
        //in order of the buckets
        let negativeBuckets = Array.from({ length: 10 }, () => []);
        let positiveBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < array.length; i++) {
            const bucket = getDigitOfNumber(array[i], digit);
            if (array[i] >= 0) {
                positiveBuckets[bucket].push(array[i]);
            } else {
                negativeBuckets[negativeBuckets.length - 1 - bucket].push(
                    array[i]
                );
            }
        }
        array = [].concat(...negativeBuckets, ...positiveBuckets);
        console.log(array);
    }
    //returns the sorted array
    return array;
}
