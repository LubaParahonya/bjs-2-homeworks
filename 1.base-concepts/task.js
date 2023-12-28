"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let dis = Math.pow(b, 2)-4*a*c
    if(dis < 0) {
      arr = [];
    } else if (dis === 0) {
     arr = arr.push(-b/(2*a))
  } else { 
      arr = arr.push((-b + Math.sqrt(dis))/(2*a), (-b - Math.sqrt(dis))/(2*a))
    }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
let P = ((percent /100) / 12)
let S = amount - contribution;
let n = (1 + P)**countMonths
let payment = S * (P + (P / (((1 + P)**n) - 1)))

  return payment
}