// reading docs 1 - ex8.js

let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;

typeof tweet;   // 'string'
typeof words;   // 'object' Array.isArray() method can be used to distinguish an object from an array which returns a boolean
typeof isValid; // 'boolean'