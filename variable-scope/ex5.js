// variable scope - ex5.js

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction(); // ReferenceError is thrown because declaration on line 8 shadows the one on line 4 AND variables declared with let are not available until the code runs.