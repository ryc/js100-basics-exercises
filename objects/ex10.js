// objects - ex10.js

/* another way
function clone(obj) {
  return Object.assign({}, obj);
}
*/

function clone(obj) {
  let objArray = Object.entries(obj);

  let clonedObj = {};
  objArray.forEach(pair => {
    clonedObj[pair[0]] = pair[1];
  });

  return clonedObj;
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);
console.log(clonedPerson.age);