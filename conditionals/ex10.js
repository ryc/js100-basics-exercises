// conditionals - ex10.js

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);
// parentheses are needed because && has a higher operator precedence than ||
console.log(isMoving); // logs true
