function extendPrototype(Class) {
  Class.prototype.species = 'Human';

  Class.prototype.toSpeciesString = function () {
    return `I am a ${this.species}. ${this.toString()}`;
  };
}
class Person {
  constructor(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }

  toString() {
    return `My name is ${this.name} and I am ${this.age} years old. My main hobby is ${this.hobby}.`;
  }
}

extendPrototype(Person);

let pesho = new Person('Pesho', 25, 'Skating');
console.log(pesho.toSpeciesString());
