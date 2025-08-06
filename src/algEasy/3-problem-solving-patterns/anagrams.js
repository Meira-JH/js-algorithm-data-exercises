//given two strings, determine if one is anagram of the other

//O(n) complexity
export function isAnagram(input1, input2) {
  //construct possible responses
  const response = {
    true: (word1, word2) =>
      `True! The words ${word1} and ${word2} are anagrams`,
    false: (word1, word2) =>
      `False. The words ${word1} and ${word2} are not anagrams`,
    error: 'Error. These inputs are not valid',
    default: 'Ops... We could not verify the inputs',
  };
  //construct index objects
  let word1Letters = {};
  let word2Letters = {};

  //verify if inputs are strings
  if (input1 === '' && input2 === '') {
    return console.log(response.true(input1, input2));
  }
  //verify if inputs are strings
  if (typeof input1 !== 'string' || typeof input2 !== 'string') {
    return console.log(response.error);
  }
  //normalize inputs to avoid case sensitiveness
  const word1 = input1.trim().toLocaleLowerCase();
  const word2 = input2.trim().toLocaleLowerCase();
  //verify words length
  if (word1.length !== word2.length) {
    return console.log(response.false(word1, word2));
  }
  //iterate through words to index letters
  for (let letter of word1) {
    word1Letters[letter] ? ++word1Letters[letter] : (word1Letters[letter] = 1);
  }
  for (let letter of word2) {
    word2Letters[letter] ? ++word2Letters[letter] : (word2Letters[letter] = 1);
  }

  //check if all letters in one array exist in the other
  for (let letter in word1Letters) {
    if (!word2Letters[letter]) return console.log(response.false(word1, word2));
    if (word1Letters[letter] !== word2Letters[letter]) {
      return console.log(response.false(word1, word2));
    }
  }

  return console.log(response.true(word1, word2));
}
