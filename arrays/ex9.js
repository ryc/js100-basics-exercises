// arrays - ex9.js

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(str, arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === str) return true;
  }
  
  return false;
}

/*
function contains(element, list) {
  return list.indexOf(element) >= 0;
}
*/

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false