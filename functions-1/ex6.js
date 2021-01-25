// functions 1 - ex6.js

function compareByLength(word1, word2) {
  if (word1.length > word2.length) {
    return -1;
  } else if (word1.length < word2.length) {
    return 1;
  } else {
    return 0;
  }
}

console.log(compareByLength('humor', 'grace'));