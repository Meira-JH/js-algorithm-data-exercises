export function capitalizeWords(array) {
    if (!array || !array[0] || typeof array[0] !== "string") {
        return array;
    } else {
        console.log(array);
        const wordCapitalized = array[0].toUpperCase();
        return [wordCapitalized].concat(capitalizeWords(array.splice(1)));
    }
}
