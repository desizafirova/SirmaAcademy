class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }
  sleep() {
    return `${this.name} is sleeping`;
  }
}

class Cat extends Animal {
  constructor(name, age, eyeColor) {
    super(name, age);
    this.eyeColor = eyeColor;
  }

  meow() {
    return 'meow, meow';
  }
}

class Dog extends Animal {
  constructor(name, age, kg) {
    super(name, age);
    this.kg = kg;
  }

  bark() {
    return `${this.name} is barking`;
  }
}

const cat1 = new Cat('Kitty', 3, 'blue');
console.log(cat1);
console.log(cat1.eat());
console.log(cat1.meow());
console.log(cat1.sleep());

const dog1 = new Dog('Hans', 5, 5);
console.log(dog1);
console.log(dog1.bark());
console.log(dog1.eat());
console.log(dog1.sleep());
