"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let dis = Math.pow(b, 2)-4*a*c
    if(dis < 0) {
      arr = [];
    } else if (dis === 0) {
    x = -b/(2*a)
     arr.push(x)
  } else { 
      x = (-b + Math.sqrt(dis))/(2*a)
      y = (-b - Math.sqrt(dis))/(2*a)
      arr.push(x, y)
    }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
let P = ((percent /100) / 12)
let S = amount - contribution;
let n = (1 + P)**countMonths
let payment = S * (P + (P / (n - 1)))
let N = (payment * 12).toFixed(2)

  return parseInt(N)
}