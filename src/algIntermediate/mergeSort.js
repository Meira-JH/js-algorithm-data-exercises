function merge(subarray1, subarray2) {
  //define positional consts
  let i = 0;
  let j = 0;
  //define merge array
  let mergedArray = [];

  //loop untill finish iteration
  //on one of the sides
  while (subarray1.length > i && subarray2.length > j) {
    if (subarray1[i] < subarray2[j]) {
      mergedArray.push(subarray1[i]);
      ++i;
    } else {
      mergedArray.push(subarray2[j]);
      ++j;
    }
  }

  //guarantee iteration on rest of elements
  //of the bigger array
  while (subarray1.length > i) {
    mergedArray.push(subarray1[i]);
    ++i;
  }
  while (subarray2.length > j) {
    mergedArray.push(subarray2[j]);
    ++j;
  }

  return mergedArray;
}

export function mergeSort(array) {
  if (array.length <= 1) return array;

  //define the midpoint to split the array
  let arrayMiddle = Math.floor(array.length / 2);
  //divide the array in 2 subarrays
  //and call recurssion to slice it till the end
  let subarray1 = mergeSort(array.slice(0, arrayMiddle));
  let subarray2 = mergeSort(array.slice(arrayMiddle));
  //merge subarrays
  return merge(subarray1, subarray2);
}
