"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  const d = Math.pow (b, 2) - 4*a*c;
  if (d === 0){
    arr.push(-b/(2*a));
  }
  else if (d > 0){
    arr.push((-b + Math.sqrt(d) )/(2*a)), arr.push((-b - Math.sqrt(d) )/(2*a));
  }
  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
