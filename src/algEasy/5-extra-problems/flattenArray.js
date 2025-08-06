//write a function that transforms a array of arrays
//into an array of elements (only one depth)
export function flatten(arrayOfArrays) {
  let flattenArray = [];

  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (typeof arrayOfArrays[i] !== 'object') {
      flattenArray = [...flattenArray, arrayOfArrays[i]];
    }
    if (typeof arrayOfArrays[i] === 'object') {
      flattenArray = flattenArray.concat(flatten(arrayOfArrays[i]));
    }
  }

  return flattenArray;
}
