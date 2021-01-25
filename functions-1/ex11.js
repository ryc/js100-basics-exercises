// functions 1 - ex11.js

function greet(langCode) {
  switch (langCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!'
    case 'de': return 'Hallo!'
    case 'sv': 'Hej!'
    case 'af': return 'Haai!'
  }
}

function extractLanguage(locale) {
  return locale.split('_')[0];
}

function extractRegion(locale) {
  return locale.substring(3, 5);
}

function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

   if (language === 'en' && region === 'US') return 'Hey!';
   if (language === 'en' && region === 'GB') return 'Hello!';
   if (language === 'en' && region === 'AU') return 'Howdy!';
   if (language === 'en' && region === 'CA') return 'Hey hey!';

   return greet(language);
}

console.log(localGreet('en_US.UTF-8'));
console.log(localGreet('en_GB.UTF-8'));
console.log(localGreet('en_AU.UTF-8'));
console.log(localGreet('en_CA.UTF-8'));

console.log(localGreet('fr_FR.UTF-8'));
console.log(localGreet('fr_CA.UTF-8'));
console.log(localGreet('fr_MA.UTF-8'));
