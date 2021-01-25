// functions 1 - ex8.js

function greet(langCode) {
  switch (langCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!'
    case 'af': return 'Haai!'
  }
}

console.log(greet('af'));