"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let dis = Math.pow(b, 2)-4*a*c;
    if(dis > 0) {
      let x = (-b + Math.sqrt(dis))/(2*a);
      let y = (-b - Math.sqrt(dis))/(2*a);
      arr.push(x, y);
    } if (dis === 0) {
    let x = -b/(2*a);
    arr.push(x);
  } 
  return arr
}



            
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
let rate = ((percent /100) / 12);
let loanBody = amount - contribution;
let raisedDegree = (1 + rate)**countMonths;
let payment = loanBody * (rate + (rate / (raisedDegree - 1)));
let paymentRound = (payment * countMonths).toFixed(2);

  return +paymentRound
}


