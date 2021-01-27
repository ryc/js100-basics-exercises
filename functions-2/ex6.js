// functions 2 - ex6.js

function removeLastChar(str) {
  // return str.split('').slice(0, str.length - 1).join('');
  return str.substring(0, str.length - 1);
}

console.log(removeLastChar('ciao!'));
console.log(removeLastChar('hello'));