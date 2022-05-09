export function sumOfElements(array) {
    let total = 0;
    for (let [index, item] of array.entries()) {
        total += item;
    }
    console.log(total);
    //the space complexity = O(1)
    //the function ocupies always the same space,
    //once is in the SAME ANSWER SIZE on every input
    return total;
}

export function doubleEachItem(array) {
    let newArray = [];
    for (let [i, item] of array.entries()) {
        newArray.push(2 * item);
    }
    console.log(newArray);
    //the space complexity = O(n)
    //the function ocupies n spaces, once is in the SAME PROPORTION
    //with the input
    return newArray;
}
