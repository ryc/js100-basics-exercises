// loops - ex6.js

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let index = 0; index < cities.length; index += 1) {
  if (cities[index] === null) continue;
  
  console.log(cities[index].length);
}