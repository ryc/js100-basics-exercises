// strings - ex3.js

function repeat(times, str) {
  let result = '';

  while (times > 0) {
    result += str;
    times -= 1;
  }

  return result;
}

console.log(repeat(4, 'ha'));
