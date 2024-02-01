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
        if(((a + b) <= c) || ((a + c) <= b) || ((b + c) <= a)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }
    get perimeter() {
        let p = (this.a + this.b + this.c);
        return p;
    }
  
    get area () {
      let p = (this.a + this.b + this.c) / 2;
      let ar = Math.round(1000 * Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) + Number.EPSILON) / 1000;
      return ar;
  }
}
  
  
  function getTriangle (a, b, c) {
    try {
        return new Triangle(a, b, c);
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
    
}