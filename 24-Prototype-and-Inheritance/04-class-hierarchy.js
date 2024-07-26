function classHierarchy() {
  class Figure {
    constructor(units = 'cm') {
      this.units = units;
    }
    get area() {}
    changeUnits(newUnit) {
      return (this.units = newUnit);
    }
    toString() {}
  }

  class Circle extends Figure {
    constructor(units, r) {
      super(units);
      this.r = r;
    }
    get area() {
      return (Math.PI * (this.r * this.r)).toFixed(2);
    }
    toString() {
      return `Circle's area: ${this.area}${this.units}`;
    }
  }

  class Rectangle extends Figure {
    constructor(units, a, b) {
      super(units);
      this.a = a;
      this.b = b;
    }
    get area() {
      return (this.a * this.b).toFixed(2);
    }
    toString() {
      return `Rectangle's area: ${this.area}${this.units}`;
    }
  }

  return { Figure, Circle, Rectangle };
}

const { Figure, Circle, Rectangle } = classHierarchy();

const circle1 = new Circle('cm', 3);
console.log(circle1.area);
console.log(circle1.toString());
