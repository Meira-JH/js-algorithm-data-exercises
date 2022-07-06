/* 
Challenge
Given a list of integers, count and return the number of times each value appears as an array of integers.

Function Description
countingSort has the following parameter(s):
    arr[n]: an array of integers

Returns
    int[100]: a frequency array 
*/

export function countingSort(arr) {
    let frequencyArray = Array(100).fill(0);

    for (let number of arr) {
        if (!frequencyArray[number]) {
            frequencyArray[number] = 1;
        } else {
            frequencyArray[number] += 1;
        }
    }

    return frequencyArray;
}
