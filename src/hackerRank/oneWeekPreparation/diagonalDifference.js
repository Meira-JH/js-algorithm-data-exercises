/* 
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

Function description
diagonalDifference takes the following parameter:
    int arr[n][m]: an array of integers

Return
    int: the absolute diagonal difference
 */

export function diagonalDifference(arr) {
    arr.shift();
    let absDiagonalDifference = 0;
    let numberOfDiagonals = arr.length;
    let diagonalLoop = 0;
    let diagonalSumLeft = 0;
    let diagonalSumRight = 0;

    while (diagonalLoop < numberOfDiagonals) {
        diagonalSumLeft += arr[diagonalLoop][diagonalLoop];
        diagonalSumRight +=
            arr[diagonalLoop][numberOfDiagonals - 1 - diagonalLoop];

        ++diagonalLoop;
    }

    absDiagonalDifference = Math.abs(diagonalSumLeft - diagonalSumRight);

    return absDiagonalDifference;
}
