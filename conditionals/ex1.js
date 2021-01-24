// conditionals - ex1.js

/* 
// the following values are falsy(evaluate as false) in JS:
0
-0
0n        // BigInt zero
NaN
'' or ""  // empty string
false
null
undefined
*/

values = [0, -0, 0n, NaN, '', "", false, null, undefined];

values.forEach(value => {
  if (value) return `${value} is truthy in JS!`;
  console.log(`${value} is falsy in JS!`);
});