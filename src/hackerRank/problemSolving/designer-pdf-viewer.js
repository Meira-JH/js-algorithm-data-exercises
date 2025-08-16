// When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle.
// In this PDF viewer, each word is highlighted independently.

// There is a list of 26 character heights aligned by index to their letters. For example, 'a' is at index 0 and 'z'
// is at index 25. There will also be a string. Using the letter heights given, determine the area of the rectangle highlight in mm² assuming all letters are 1mm wide.

// Function Description

// Complete the designerPdfViewer function:

// Parameters:

// int h[26]: the heights of each letter
// string word: a string
// Returns:

// int: the size of the highlighted area
// Input Format

// The first line contains 26 space-separated integers describing the respective heights of each consecutive
// lowercase English letter, ascii[a-z].
// The second line contains a single word consisting of lowercase English alphabetic letters.

// Constraints

// 1 ≤ h[?] ≤ 7, where ? is an English lowercase letter.
// The word contains no more than 10 letters.
// Sample Input 0

export const designerPdfViewerMock = {
  h: [
    1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5,
  ],
  word: 'abc',
};

function createAlphabetDictionary(arrayOfLetterHeights) {
  const alphabetDictionary = {};

  for (let i = 0; i < 26; i++) {
    const asciiLetter = String.fromCharCode(65 + i);
    alphabetDictionary[asciiLetter] = {
      height: arrayOfLetterHeights[i],
    };
  }

  return alphabetDictionary;
}

export function designerPdfViewer(h, word) {
  const alphabetDictionary = createAlphabetDictionary(h);
  let maxLetterHeigth = 0;

  for (let letter of word) {
    if (maxLetterHeigth < alphabetDictionary[letter.toUpperCase()].height)
      maxLetterHeigth = alphabetDictionary[letter.toUpperCase()].height;
  }

  const highlightedArea = maxLetterHeigth * word.length;

  console.log('highlightedArea', highlightedArea);

  return highlightedArea;
}
