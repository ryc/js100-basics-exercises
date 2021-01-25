// functions 1 - ex5.js

function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3')
    divisor += 1;
  }
}

multiplesOfThree; // nothing is logged to the console because this is not a function invocation (missing parentheses).