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
    //create an array of 100 zero elements
    let frequencyArray = Array(100).fill(0);

    for (let number of arr) {
        //checks if number is being counted for the first time
        if (!frequencyArray[number]) {
            //count 1 if yes
            frequencyArray[number] = 1;
        } else {
            //sum 1 if it has already been counted
            frequencyArray[number] += 1;
        }
    }

    return frequencyArray;
}
