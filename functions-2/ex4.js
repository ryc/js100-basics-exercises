// functions 2 - ex4.js

function calculateBMI(heightIncm, weightInKg) {
  let heightInM = heightIncm / 100;
  let bmi =  weightInKg / heightInM**2;

  return bmi.toFixed(2);
}

console.log(calculateBMI(180, 80));