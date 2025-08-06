export function capitalizeFirstLetter(array) {
  if (array.length === 0) {
    return array;
  } else {
    const letter = array[0][0].toUpperCase();
    const word = letter + array[0].substring(1);
    return [word].concat(capitalizeFirstLetter(array.slice(1)));
  }
}
