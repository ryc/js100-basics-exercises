// strings - ex9.js

let text = 'launch school tech & talk';

function capitalize(string) {
  let array = string.split(' ');
  let result = array.map(word => {
    return word.replace(word[0], word[0].toUpperCase());
  })
  
  return result.join(' ');
}

console.log(capitalize(text));