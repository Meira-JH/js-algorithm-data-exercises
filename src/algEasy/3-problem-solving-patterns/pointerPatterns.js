//write a function where input is a sorted number array
//it must return the first pair of numbers that sums zero
//ex: [-3, -2. -1, 0, 3] // [-3, 3]

//O(n²)
export function findSumPairNoob(arrayOfNumbers) {
  // checks if its all numbers
  //interate the array to find the sum

  for (let [numberIndex, number] of arrayOfNumbers.entries()) {
    for (let [toSumIndex, toSum] of arrayOfNumbers.entries()) {
      if (number + toSum === 0 && numberIndex !== toSumIndex) {
        return [number, toSum];
      }
    }
  }
  return undefined;
}

export function findSumPairPointer(arrayOfNumbers) {
  let arrayBeggining = 0;
  let arrayEnding = arrayOfNumbers.length - 1;

  while (arrayBeggining < arrayEnding) {
    let sum = arrayOfNumbers[arrayBeggining] + arrayOfNumbers[arrayEnding];
    if (sum === 0)
      return [arrayOfNumbers[arrayBeggining], arrayOfNumbers[arrayEnding]];
    if (sum > 0) {
      --arrayEnding;
    } else ++arrayBeggining;
  }

  return undefined;
}

//implement function where input is sorted number array
//the function must count only the unique values
//negative values can be unique

export function countUniqueValues(sortedArrayOfNumbers) {
  //stablish the initial position of pointers and counting object
  let beginPointer = 0;
  let secondPointer = 1;
  let countingOfUnique = { total: 0, unique: [] };

  //iterate through array with pointers
  while (secondPointer <= sortedArrayOfNumbers.length) {
    if (
      sortedArrayOfNumbers[beginPointer] === sortedArrayOfNumbers[secondPointer]
    ) {
      //move only second pointer if equal to the begin one
      ++secondPointer;
    }
    if (
      sortedArrayOfNumbers[beginPointer] !== sortedArrayOfNumbers[secondPointer]
    ) {
      //add element to counting, move begin pointer and second pointer
      countingOfUnique.unique.push(sortedArrayOfNumbers[beginPointer]);
      ++countingOfUnique['total'];
      ++beginPointer;
      //if I prefer to be very concise, I could use the same array
      //to discover the number of unique elements
      sortedArrayOfNumbers[beginPointer] = sortedArrayOfNumbers[secondPointer];
      ++secondPointer;
    }
  }

  //iterate the array with pointers,
  return countingOfUnique;
}

export function countUniqueNumbers2() {
  var set = new Set(arr);
  //Set is a Javascript instance that reduces all elements of an array to
  //the unique one
  //Set.size is the method to discover the amount of unique numbers of an array
  return set.size;
}

//function that checks is there are duplicate elements
//in an array of data
//O(n)
export function areThereDuplicatesTwoLoops(...args) {
  //transform arguments into array
  const arrayOfElements = [...args];

  //variables to count pointers positions
  //second pointer begins 1 position ahead
  let firstPointer = 0;
  let secondPointer = 1;

  //iterate through array for the first pointer
  for (let i = firstPointer; i <= arrayOfElements.length - 2; i++) {
    //iterate through array for the second pointer
    for (let j = secondPointer; j <= arrayOfElements.length - 1; j++) {
      //if finds duplicates, returns true
      console.log(arrayOfElements[i], arrayOfElements[j]);
      if (arrayOfElements[i] === arrayOfElements[j]) {
        return true;
      }
      //else continues the loop
    }
    //once the first loop of the second pointer is finished
    //sums one position for the second one
    //so it doesnt have to iterate the previous element anymore
    //OBS: the first pointer doesnt even need the counter variable
    //once it will be equal to 'i'
    ++secondPointer;
  }
  return false;
}

//O(n log n)
export function areThereDuplicatesWhile(...args) {
  //transform arguments into array
  const arrayOfElements = [...args];

  //variables to count pointers positions
  //second pointer begins 1 position ahead
  let firstPointer = 0;
  let secondPointer = 1;

  //iterate through array
  while (secondPointer <= arrayOfElements.length) {
    //checks if the elements in pointer positions
    //are equal
    if (arrayOfElements[firstPointer] === arrayOfElements[secondPointer]) {
      //returns true if they are
      return true;
    }
    //adds position to second pointer if they are not
    ++secondPointer;

    //checks if the second pointer is at the end of the array
    //and if the first pointer is at a lower position of
    //length - 1
    if (
      secondPointer === arrayOfElements.length &&
      firstPointer < arrayOfElements.length - 1
    ) {
      //if not,
      ++firstPointer;
      secondPointer = firstPointer + 1;
    }
  }
  return false;
}

//function to check wether 2 inputs have
//same elements in order
//ex: abracadabra <> abc = true
// abc <> acb = false

export function containsInOrder(input1, input2) {
  //establish biggest and smallest string
  let smallestString = input1.length >= input2.length ? input2 : input1;
  let biggestString = input1.length >= input2.length ? input1 : input2;

  //variables to first and second pointer
  let firstPointer = 0;
  let secondPointer = 0;
  //variable to store last matching position
  //of the second input string (to establish order)
  let lastInput2MatchingPosition = 0;
  let numberOfMatches = 0;

  while (firstPointer <= smallestString.length) {
    if (smallestString[firstPointer] === biggestString[secondPointer]) {
      lastInput2MatchingPosition = secondPointer;
      ++firstPointer;
      ++numberOfMatches;
    }
    if (
      secondPointer === biggestString.length - 1 &&
      smallestString[firstPointer] !== biggestString[secondPointer]
    ) {
      ++firstPointer;
      secondPointer = lastInput2MatchingPosition;
    }
    ++secondPointer;
  }

  if (numberOfMatches === smallestString.length) {
    return true;
  }

  return false;
}

export function isPalindrome(string) {
  let firstPointer = 0;
  let secondPointer = string.length - 1;

  while (firstPointer + 1 <= string.length / 2) {
    if (string[firstPointer] !== string[secondPointer]) return false;
    ++firstPointer;
    --secondPointer;
  }
  return true;
}
