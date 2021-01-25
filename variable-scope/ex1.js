// variable scope - ex1.js

console.log(greeting);

var greeting = 'Hello world!';

// this logs udefined because in JS, when a vairable is declared with var keyword, it's declaration is hoisted - not the initialization, but only the declaration - to the top of the scope.