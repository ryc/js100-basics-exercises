// objects - ex8.js

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// let nestedPerson = Object.entries(person);
let nestedPerson = [];

for (let prop in person) {
  nestedPerson.push([prop, person[prop]]);
}

console.log(nestedPerson);
