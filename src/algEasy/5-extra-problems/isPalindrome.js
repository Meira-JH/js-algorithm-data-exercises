export function isPalindrome(string) {
  let firstPointer = 0;
  let secondPointer = string.length - 1;

  while (firstPointer + 1 <= string.length / 2) {
    if (string[firstPointer] !== string[secondPointer]) return false;
    ++firstPointer;
    --secondPointer;
  }
  return true;
}
