"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4*a*c;
  let sqrtOne;
  let sqrtTwo;

  if (d === 0) {
    let sqrtOne = -b/(2*a);
    arr.push(sqrtOne);
    console.log(arr);
  }
  if (d > 0) {  
    sqrtOne = (-b + Math.sqrt(d))/(2*a);
    sqrtTwo = (-b - Math.sqrt(d))/(2*a);
    arr.push(sqrtOne);
    arr.push(sqrtTwo);
    console.log(`Первый корень = ${arr[0]} \nВторой корень = ${arr[1]}`);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let bodyCredit;
  let monthPayment;
  let totalAmount;

  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths)
    ) {
      console.log('Один из параметров содержит неверное значение!');
      return false;
    }
  percent = (percent / 100) / 12;
  bodyCredit = amount - contribution;
  monthPayment = bodyCredit * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
  totalAmount = parseFloat((monthPayment * countMonths).toFixed(2));
  return totalAmount;
}