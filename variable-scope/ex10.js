// variable scope - ex10.js

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a); // logs { firstName: 'Jane', lastName: 'Doe' }