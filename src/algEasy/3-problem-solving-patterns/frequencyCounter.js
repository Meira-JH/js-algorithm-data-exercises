//Write function which accepts two arrays.
//Should return true if every value in the first has it's
//corresponding square in the second.
//Frequency of values should be the same
//ex: same([1, 2, 3], [4, 1, 9]) -> true

//easy solution
//O(n²) because of loop inside loop -> for...of and .indexOf
export function isRespectivelySquaresNoob(values, squares) {
    //verifies if there are more elements in one array than other
    if (values.length !== squares.length) {
        return false;
    }

    for (const [i, value] of values.entries()) {
        //loop to verify if in array of values there is the square
        //of each number in array squares, if there is returns the index
        //if there isnt returns false
        let correctIndex = squares.indexOf(values[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        //removes the number in squares array
        squares.splice(correctIndex, 1);
    }
    return true;
}

//complexity O(n)
export function isRespectivelySquaresPro(valuesArray, squaresArray) {
    //defines objects contaning counting
    let valuesCounter = {};
    let squaresCounter = {};

    if (valuesArray.length !== squaresArray.length) return false;
    //the return must be false if different amount of elements

    for (const value of valuesArray) {
        //iterate through arrays to count each element
        valuesCounter[value]
            ? ++valuesCounter[value]
            : (valuesCounter[value] = 1);
    }

    for (const square of squaresArray) {
        squaresCounter[square]
            ? ++squaresCounter[square]
            : (squaresCounter[square] = 1);
    }

    for (let property in valuesCounter) {
        //iterate the counting objects to check if elements in array of squares
        //have the same amount of square elements in array of values
        if (!(property ** 2 in squaresCounter)) return false;
        if (squaresCounter[property ** 2] !== valuesCounter[property])
            return false;
    }

    //returns true if the function doesnt return in any conditional
    return true;
}

//EXERCISE: given two positive intergers, find out if the numbers have the same amount
//of digits
export function sameFrequency(number1, number2) {
    //treat the possibility of numbers bigger than 2^53
    const bigInt1 = BigInt(number1);
    const bigInt2 = BigInt(number2);

    //calculate length with toString and .match regex to
    //count amount of digits
    const length1 = bigInt1.toString().match(/\d/g).length;
    const length2 = bigInt2.toString().match(/\d/g).length;

    if (length1 === length2) return true;

    return false;
}

export function sameFrequencyLoop(number1, number2) {
    //verify if number
    if (typeof number1 !== "number" || typeof number2 !== "number")
        return false;

    //treat the possibility of numbers bigger than 2^53
    const bigInt1 = BigInt(number1).toString();
    const bigInt2 = BigInt(number2).toString();

    //two constants for counting number of digits
    let digits1 = {};
    let digits2 = {};

    for (const digit of bigInt1) {
        digits1[digit] ? ++digits1[digit] : (digits1[digit] = 1);
    }
    for (const digit of bigInt2) {
        digits2[digit] ? ++digits2[digit] : (digits2[digit] = 1);
    }

    for (const digit in digits1) {
        if (digits1[digit] !== digits2[digit]) return false;
        if (!digits2[digit]) return false;
    }

    return true;
}
