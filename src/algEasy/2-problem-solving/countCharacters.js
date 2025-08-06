// UNDERSTAND THE PROBLEM WITH SIMPLE EXAMPLES:
//1. re-estate the problem in own words, constructing a simple example and naming necessary variables.
//2. how/what could be the inputs?
//3. how/what could be the outputs?
//need to iterate through data and return how many times each character appears
//inputs: "I will be back" or array of characters like [a, b, 1, 2]
//output: [{i: 2}, {w: 1}, {l: 2},{ b: 2}, {e: 1}, {c: 1},{k: 1}]

// MAKE THE EXAMPLES MORE COMPLEX
//4. what about invalid and empty inputs?
//5. what about more diverse/larger inputs?
//6. what about null, undefined or empty outputs?
//if input is empty, return message: "there are no characters in this sentence"
//there is no impediment cause of size of input
//if input invalid, or counting was impossible for some reason, default output should be: "we could not count these characters"

// BREAK IT DOWN, SOLVE AND SIMPLIFY
//7. write down the steps needed
//8. elaborate the most natural solution
//9. refine the solution with more eficient/clean code

export function characterCount(input) {
  let countedCharacters = {};
  //creates the object for the answer

  function isStringOrArray(input) {
    let arrayOfCharacters = [];
    //checks if input is array or string
    if (typeof input === 'string') {
      arrayOfCharacters = input.split('');
    }
    if (Array.isArray(input)) {
      arrayOfCharacters = input;
    }

    return arrayOfCharacters;
  }

  isStringOrArray(input).map((character) => {
    if (typeof character === 'string') {
      // turns character to lower case and checks if the character existis in the answer obj, if it does adds +1 value to its value
      countedCharacters[character.toLowerCase()] =
        ++countedCharacters[character] || 1;
    }
  });

  // if iteration through elements was possible, returns the count
  if (Object.keys(countedCharacters).length > 0) return countedCharacters;
  // if there are empty or input is not a string
  if (!input || typeof input !== 'string')
    return { message: 'This input is invalid' };

  // invalid inputs and problems on counting returns default message
  return 'This count was not possible. It might be a problem with the input.';
}

// FINAL REASONING
//Is it possible to solve the (output) problems with the inputs?
