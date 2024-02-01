﻿function parseCount (num){
  testNum = Number.parseFloat(num)
  if(isNaN(testNum)){
    throw new Error("Невалидное значение")
    } 
  return testNum
}



function validateCount(num) {
  try{
    return parseCount(num)
  }
  catch(arr){
    return arr
  }
}


class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
      if(((a + b) <= c) || ((a + c) <= b) || ((b + c) <= a)) {
          throw new Error("Треугольник с такими сторонами не существует");
      }
      
  }
  get perimeter() {
      return this.a + this.b + this.c;
  }
  get area () {
      let p = (this.a + this.b + this.c) / 2;
      let ar = Math.round(1000 * Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) + Number.EPSILON) / 1000;
      return ar;
  }
}

function getTriangle (a, b, c) {
  try {
      let trg = new Triangle(a, b, c);
      return trg;
  }
  catch (error) {
      let err = {
          get perimeter() {
             return "Ошибка! Треугольник не существует";
          },
          get area() {
             return "Ошибка! Треугольник не существует";
          }
      }
      return err;
  }
  finally {

  }
}