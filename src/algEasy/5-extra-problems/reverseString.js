//function that returns a string in reverse

export function reverseString(string) {
  let newString = '';
  let index = 0;

  while (index <= string.length - 1) {
    newString += string[string.length - (1 + index)];
    console.log(string[string.length - (1 + index)]);
    ++index;
  }

  return newString;
}
