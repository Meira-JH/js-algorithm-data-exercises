import {
  isAlphabeticPalindrome,
  mockPalindromeFilter,
} from './hackerRank/softwareEngineerPrepKit/checkPalindromeFilter.js';

function main() {
  const result = isAlphabeticPalindrome(mockPalindromeFilter.code);

  console.log('RESULT', result);
}

main();
