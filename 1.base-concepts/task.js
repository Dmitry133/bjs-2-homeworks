"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  let rootOne, rootTwo;
  


  if (discriminant < 0) {
    arr = [];
    console.log("Корней нет");
  } else if (discriminant === 0) {
    arr = [(-b) / (2 * a)];
  } else {
    rootOne = (-b + Math.sqrt(discriminant))/(2*a);
    rootTwo = (-b - Math.sqrt(discriminant))/(2*a);
    arr.push(rootOne, rootTwo);
  };
  
  return arr;
};

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  if (isNaN(percent) === true || 
      isNaN(contribution) === true ||
      isNaN(amount) === true ||
      isNaN(countMonths) === true) {
    return false;
    
  } else {
    percent = (percent / 100) / 12;
    let credit = amount - contribution;
    let payment = credit * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
    let totalAmount = (payment * countMonths);
    return Number(totalAmount.toFixed(2));
  };
};