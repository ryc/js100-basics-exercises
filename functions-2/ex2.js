// functions 2 - ex2.js

function greet(greeting = 'Hello', recepient = 'world') {
  console.log(`${greeting}, ${recepient}!`);
}

greet();
greet('Salutations');
greet('Good morning', 'Launch School');