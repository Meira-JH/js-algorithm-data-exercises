//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line withplaces after the decimal.
//Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to are acceptable.

export function plusMinus(arr) {
  let numbersRatio = { positive: 0, negative: 0, zero: 0 };
  let numberOfFractions = 0;

  for (let number of arr) {
    ++numberOfFractions;
    if (number > 0) {
      ++numbersRatio['positive'];
    }
    if (number < 0) {
      ++numbersRatio['negative'];
    }
    if (number === 0) {
      ++numbersRatio['zero'];
    }
  }
  for (let number in numbersRatio) {
    const normalize = (numbersRatio[number] / numberOfFractions).toFixed(6);
    console.log(normalize);
  }
}
