export function bubbleSort (array){
    const swap = (array, index1, index2) => {
        [array[index1], array[index2]] = [array[index2], array[index1]]
    }

    //begins comparison at the end
    //so the length of array helps not to repeat
    //already positioned elements
    for (let i = array.length; i > 0; i--){
        //iterate through array from beggining
        for(let j=0; j < i-1; j++){

            if(array[j] > array[j+1]){
                //positions the biggest number at the end
                swap(array, j, j+1)
            }
        }
    }

    return array
}