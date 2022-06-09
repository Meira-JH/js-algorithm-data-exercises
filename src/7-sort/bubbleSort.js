export function bubbleSort(array) {
    const swap = (array, index1, index2) => {
        //swaps
        [array[index1], array[index2]] = [array[index2], array[index1]];
    };
    let hasSwapedAny = true;

    //begins comparison at the end
    //so the length of array helps not to repeat
    //already positioned elements
    for (let i = array.length; i > 0; i--) {
        //checks if the last loop had any swaps
        if (hasSwapedAny) {
            hasSwapedAny = false;

            //iterate through array from beginning
            for (let j = 0; j < i - 1; j++) {
                //checks if one element is bigger than the next
                if (array[j] > array[j + 1]) {
                    //positions the biggest number at the end
                    swap(array, j, j + 1);
                    //if any swap happens, register it
                    hasSwapedAny = true;
                }
            }
        } else {
            return array;
        }
    }

    return array;
}
