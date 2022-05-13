//write a function where input is a sorted number array
//it must return the first pair of numbers that sums zero
//ex: [-3, -2. -1, 0, 3] // [-3, 3]

//O(n²)
export function findSumPairNoob(arrayOfNumbers) {
    // checks if its all numbers
    //interate the array to find the sum

    for (let [numberIndex, number] of arrayOfNumbers.entries()) {
        for (let [toSumIndex, toSum] of arrayOfNumbers.entries()) {
            if (number + toSum === 0 && numberIndex !== toSumIndex) {
                return [number, toSum];
            }
        }
    }
    return undefined;
}

export function findSumPairPointer(arrayOfNumbers) {
    let arrayBeggining = 0;
    let arrayEnding = arrayOfNumbers.length - 1;

    while (arrayBeggining < arrayEnding) {
        let sum = arrayOfNumbers[arrayBeggining] + arrayOfNumbers[arrayEnding];
        if (sum === 0)
            return [
                arrayOfNumbers[arrayBeggining],
                arrayOfNumbers[arrayEnding],
            ];
        if (sum > 0) {
            --arrayEnding;
        } else ++arrayBeggining;
    }

    return undefined;
}

//implement function where input is sorted number array
//the function must count only the unique values
//negative values can be unique

export function countUniqueValues(sortedArrayOfNumbers) {
    //stablish the initial position of pointers and counting object
    let beginPointer = 0;
    let secondPointer = 1;
    let countingOfUnique = { total: 0, unique: [] };

    //iterate through array with pointers
    while (secondPointer <= sortedArrayOfNumbers.length) {
        if (
            sortedArrayOfNumbers[beginPointer] ===
            sortedArrayOfNumbers[secondPointer]
        ) {
            //move only second pointer if equal to the begin one
            ++secondPointer;
        }
        if (
            sortedArrayOfNumbers[beginPointer] !==
            sortedArrayOfNumbers[secondPointer]
        ) {
            //add element to counting, move begin pointer and second pointer
            countingOfUnique.unique.push(sortedArrayOfNumbers[beginPointer]);
            ++countingOfUnique["total"];
            ++beginPointer;
            sortedArrayOfNumbers[beginPointer] =
                sortedArrayOfNumbers[secondPointer];
            ++secondPointer;
        }
    }

    //iterate the array with pointers,
    return countingOfUnique;
}

export function countUniqueNumbers2() {
    var set = new Set(arr);
    //Set is a Javascript instance that reduces all elements of an array to
    //the unique one
    //Set.size is the method to discover the amount of unique numbers of an array
    return set.size;
}
