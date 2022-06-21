export function countDown(number) {
    if (number <= 0) {
        console.log("Done!");
        return;
    }
    console.log(number);
    --number;
    countDown(number);
}

export function factorial(number) {
    console.log(number);

    if (number === 1 || number === 0) return 1;

    return number * factorial(number - 1);
}

//write a function that receives a number input
// and sum all the numbers in sequence untill that number
export function sumUntill(number) {
    if (typeof number !== "number") return console.log("Input inválido");
    let sum = 0;
    function helper(helperInput) {
        if (helperInput === 0) return;
        sum += helperInput;
        helper(helperInput - 1);
    }

    helper(number);
    return sum;
}
