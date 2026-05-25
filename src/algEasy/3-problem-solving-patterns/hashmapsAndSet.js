// Focus: Membership and complements
// Contains Duplicate, Two Sum
// Comcept: Set membership; complement lookup with Map
// Templates to memorize:

function template() {

    const set = new Set();
    const hashMap = new Map();
}

// Familiarizing with Set:

// Hacker Rank example: 

// There is a string, , of lowercase English letters that is repeated 
// infinitely many times. Given an integer, , find and print the 
// number of letter a's in the first  letters of the infinite string.
// Example
// The substring we consider is , the first  characters of the infinite 
// string. There are  occurrences of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below.
// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider
// Returns

// int: the frequency of a in the substring
// Input Format

// The first line contains a single string, .
// The second line contains an integer, 

export const mockRepeatedA = 'aba'
export const mockCharactersOfString = 10

export function repeatedAinString (s, n){
    // defines de necessary loops to see the number of characters in "s"
    let repetitions = Math.floor( n / s.length )
    // calculate the rest of chars of an unfinished loop
    const rest = n % s.length;
    // Set 'a'
    const setForA = new Set();
    setForA.add('a')
    // create counter of As
    let counterOfRepetitionAs = 0;
    // create counter rest of As
    let restOfAs = 0;
    
        // iterate the full looped repetitions
        for (let i = 0; i < s.length; i++){
            // check if it is an "a"
            if(setForA.has(s[i])){
                counterOfRepetitionAs++
            }
        }

    // if there if an uncompleted loop to iterate, 
    // iterate and count the As
    if(rest){
        for (let i = 0; i < rest; i++){
            if(setForA.has(s[i])){
                restOfAs++
            }        
        }
    }


    // return counting of As
    return counterOfRepetitionAs * repetitions + restOfAs;
    
}


// Two‑Sum Existence

// Given an array of integers nums and an integer target, 
// return true if there exist two distinct elements in the 
// array whose sum equals target. Otherwise, return false.

// Examples
// nums = [2, 7, 11, 15], target = 9 → true (2 + 7)
// nums = [3, 2, 4], target = 6 → true (2 + 4)
// nums = [3, 3], target = 6 → true (3 + 3, distinct indices but same value)
// nums = [1, 2, 3], target = 7 → false

export const twoSumExistenceMock = {
    nums: [2, 7, 11, 15],
    target: 9
}

export function twoSumExistence(nums, target) {

    // set seen numbers
    const seenNumbers = new Set();

    //iterate the array
    for (let i = 0; i < nums.length; i++){
        // find which number would be necessary 
        // to sum with to arrive at target
        const sumToTarget = target - nums[i];
        if(seenNumbers.has(sumToTarget)) return true

        seenNumbers.add(nums[i])
    }

    return false
}

// Find first non repeating index
// Given a string s, find the first non-repeating 
// character and return its index.
// If it doesn’t exist, return -1.

export const mockFirstUniqueCharacter = {
    s: 'leetcode'
}


export function findFirstUniqueChar (s){

    //create the hashMap
    const hashMap = new Map();

    // iterate the string
    for(let i = 0; i < s.length; i++){
        // set the char with frequency (add repetitions)
        hashMap.set(s[i], (hashMap.get(s[i]) || 0) + 1)
    }

        console.log('hashMap', hashMap)

    // iterate again to find first non-repeat
    for(let i = 0; i < s.length; i++ ){
        const element = hashMap.get(s[i])
        if( element === 1){
            return i
        }
    }


    return - 1
}