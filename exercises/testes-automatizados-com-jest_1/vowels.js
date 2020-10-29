// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const checkChar = (char) => /[aeiou]/.test(char) ? 1 : 0;

function vowels(str) {
  return str.split('').reduce((totalChar, char) => totalChar + checkChar(char.toLowerCase()), 0);
}

module.exports = vowels;
