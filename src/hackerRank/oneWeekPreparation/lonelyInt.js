/* Given an array of integers, where all elements 
but one occur twice, find the unique element. 

Function Description
lonelyinteger has the following parameter(s):
    int a[n]: an array of integers

Returns
    int: the element that occurs only once
*/

export function lonelyInteger(a) {
  let lonelyInt = {};

  for (let number of a) {
    if (!lonelyInt[number]) {
      lonelyInt[number] = true;
    } else {
      delete lonelyInt[number];
    }
  }

  console.log(lonelyInt);

  return Object.keys(lonelyInt)[0];
}
