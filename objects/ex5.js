// objects - ex5.js
/*
// Snippet 1
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // logs { prefix: 'Pacific' }
*/
// Snippet 2
let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // logs { Indian: 'Pacific' }

