//function that receives value and array and returns the index of the value in array
//if value doesnt exists returns -1

export function linearSearch(array, numberToFind) {
    if (!array) return -1;
    if (!numberToFind) return -1;
    if (array.length === 1 && numberToFind === array[0]) return 0;

    for (let [index, number] of array.entries()) {
        if (number === numberToFind) {
            return index;
        }
    }
    return -1;
}
