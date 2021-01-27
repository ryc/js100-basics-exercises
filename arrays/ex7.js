// arrays - ex7.js

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2); // returns false because in case of non-primitve types(array which is an object in this case), JS only considers them strictly equal when they both refer to the same object. In this case, array1 and array2 are 2 different objects that happen to have the same values as elements.