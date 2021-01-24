// conditionals - ex5.js

let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

/*
this will log the following strings because the case clauses do not have a break statement which results in a fall-through behaviour.

neigh
tweet tweet
*cricket*
*/