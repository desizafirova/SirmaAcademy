class Shape {
  calculateArea() {}
}

class Triangle extends Shape {
  constructor(b, h) {
    super();
    this.b = b;
    this.h = h;
  }

  calculateArea() {
    return ((this.b * this.h) / 2).toFixed(2);
  }
}

class Square extends Shape {
  constructor(a) {
    super();
    this.a = a;
  }

  calculateArea() {
    return (this.a * this.a).toFixed(2);
  }
}

class Circle extends Shape {
  constructor(r) {
    super();
    this.r = r;
  }

  calculateArea() {
    return (Math.PI * this.r * this.r).toFixed(2);
  }
}

const circle1 = new Circle(3);
console.log(circle1.calculateArea());

const triangle1 = new Triangle(5, 3);
console.log(triangle1.calculateArea());

const square1 = new Square(6);
console.log(square1.calculateArea());
