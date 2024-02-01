function parseCount (num){
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

  class Triangle{
    constructor(a, b, c){
      this.a = a
      this.b = b
      this.c = c
      if(a + b < c || a + c < b || b + c <a){
        throw new Error("Треугольник с такими сторонами не существует")
      }
    }
  
    get perimeter(){
      return this.a + this.b + this.c
    }
  
    get area(){
      palfPerimeter = this.perimeter/2
      areaTriangle = +Math.sqrt(palfPerimeter * (palfPerimeter - this.a) * (palfPerimeter - this.b) * (palfPerimeter - this.c)).toFixed(2)
      return areaTriangle
    }
    
  }
  
  
  function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        let arrTriangle = {
            getArea() {
                return 'Ошибка! Треугольник не существует';
            },
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        };
        return arrTriangle;
    }
}