export const mockPalindromeFilter = {
  code: 'A1b2B!a',
};

export function isAlphabeticPalindrome(code) {
  if (!code) return 0;

  //filter non letters
  const filteredCode = code.replace(/[^a-zA-Z]/g, '').toLowerCase();

  //check palindrome

  for (let i = 0; i < filteredCode.length; i++) {
    if (filteredCode[i] !== filteredCode[filteredCode.length - i - 1]) {
      return 0;
    }
  }

  return 1;
}
