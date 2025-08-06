//find all odd number in an array

export function findOddNumbers(array) {
  let result = [];

  function helper(helperInput) {
    //base case
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) {
      //select odds
      result.push(helperInput[0]);
    }
    //recurssion without first element
    helper(helperInput.slice(1));
  }

  helper(array);

  return result;
}

//write a function which takes array of numbers and returns
//their products

export function productOfAll(array) {
  let product = 0;

  function helper(helperInput) {
    if (helperInput.length === 1) return;

    product = helperInput[0] * helperInput[1];
    helper(helperInput.slice(1));
  }

  helper(array);

  return product;
}
