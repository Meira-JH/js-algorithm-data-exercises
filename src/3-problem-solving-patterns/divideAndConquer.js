//given sorted array without repeated numbers, search for values and return the index of them

export function searchForElement(array, searchedValue) {
    //define min and max position in array
    let minPosition = 0;
    let maxPosition = array.length - 1;

    //loop over the array
    while (minPosition <= maxPosition) {
        //define the middle point of the array
        console.log("min ", minPosition);
        console.log("max ", maxPosition);
        let middlePosition = Math.floor((minPosition + maxPosition) / 2);
        //define the currentElement as the medium point of the array
        const currentElement = array[middlePosition];

        if (currentElement < searchedValue) {
            minPosition = middlePosition + 1;
        } else if (currentElement > searchedValue) {
            maxPosition = middlePosition - 1;
        } else return middlePosition;
    }
    return -1;
}
