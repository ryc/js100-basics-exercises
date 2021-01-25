// functions 1 - ex10.js

function extractRegion(locale) {
  // return locale.substring(3, 5);
  return locale.split('.')[0]
               .split('_')[1];
}

console.log(extractRegion('en_US.UTF-8'));
console.log(extractRegion('en_GB.UTF-8'));
console.log(extractRegion('ko_KR.UTF-16'));