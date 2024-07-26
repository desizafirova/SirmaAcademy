class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

class Car extends Vehicle {
  constructor(make, model, doors) {
    super(make, model);
    this.doors = doors;
  }
}

class Bike extends Vehicle {
  constructor(make, model, type) {
    super(make, model);
    this.type = type;
  }
}

const car1 = new Car('BMW', 'X5', 4);
const bike1 = new Bike('Bianchi', 'Specialissima PRO', 'Road Bicycle');
console.log(car1);
console.log(bike1);
