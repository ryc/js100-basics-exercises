// variable scope - ex9.js

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a); // logs a TypeError since line 6 is attempting to reassign a constant.