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

export function powerFunction(base, exponent) {
    let isBaseZero = true;
    if (!exponent && isBaseZero) {
        return 1;
    }
    if (!exponent && !isBaseZero) {
        return base;
    }
    if (exponent) {
        isBaseZero = false;
        return base * powerFunction(base, exponent - 1);
    }
}
