//If you run performance check in these functions
//you will notice the huge difference in performance
//between the last and the other two.
//When the trillions arrive even the math of loops get wrong

//O(n)
export function addUpToEasy(numberOfSum) {
    let sum = 0;
    let rounds = 1;
    while (rounds < numberOfSum + 1) {
        sum += rounds;
        rounds++;
    }

    return console.log(sum);
}

export function addUpToEasy2(numberOfSum) {
    let sum = 0;
    for (let i = 1; i <= numberOfSum; i++) {
        sum += i;
    }
    return console.log(sum);
}

//O(1)
export function addWithMath(numberOfSum) {
    return console.log((numberOfSum * (numberOfSum + 1)) / 2);
}
