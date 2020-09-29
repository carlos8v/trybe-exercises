const assert = require('assert');

const checkForVowel = (letter) => {
  if (
    letter === 'a' ||
    letter === 'e' ||
    letter === 'i' ||
    letter === 'o' ||
    letter === 'u'
  ) {
    return true;
  }

  return false;
};

const removeVowels = (word) => {
  const characters = word.split('');
  let newWord = '';
  let vowelsCount = 0;

  characters.map((letter) => {
      if (checkForVowel(letter)) {
        vowelsCount += 1;
        newWord += vowelsCount;
      } else {
        newWord += letter;
      }
  });

  return newWord;
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.deepStrictEqual(removeVowels(parameter), result);
