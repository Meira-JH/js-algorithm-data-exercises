//Write function which accepts two arrays.
//Should return true if every value in the first has it's
//corresponding square in the second.
//Frequency of values should be the same
//ex: same([1, 2, 3], [4, 1, 9]) -> true

//easy solution
//O(n²) because of loop inside loop -> for...of and .indexOf
export function respectivelySquaresNoob(values, squares) {
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
export function respectivelySquaresPro(valuesArray, squaresArray) {
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
