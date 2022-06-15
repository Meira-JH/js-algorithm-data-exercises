/*
There is a large pile of socks that must be 
paired by color. Given an array of integers 
representing the color of each sock, determine
how many pairs of socks with matching colors 
there are

sockMerchant has the following parameter(s):
    a) int representing the number of socks in the pile
    b) array of numbers representing the colors of each sock

Returns: int / the number of pairs
 */

export function sockMerchant (numberOfSocks, arrayOfColors){
    let firstPointer = 0
    let secondPointer = 1
    let numberOfPairs = 0

    for(let i = firstPointer; i <= arrayOfColors.length; i++){
        for(let j = secondPointer; j <= arrayOfColors.length; j++){
            if(arrayOfColors[i] === arrayOfColors[j]){
                ++firstPointer
                secondPointer = firstPointer + 1
                ++numberOfPairs
            }
        }
    }
}