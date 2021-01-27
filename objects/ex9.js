// objects - ex9.js

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let person = {};
nestedArray.forEach(subarray => {
  person[subarray[0]] = subarray[1];
});

console.log(person);