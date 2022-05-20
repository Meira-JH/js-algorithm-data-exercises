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
