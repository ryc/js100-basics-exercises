// strings - ex5.js

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

function compare(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}

console.log(compare(string1, string2));