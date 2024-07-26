class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName(
    firstName = this.firstName,
    lastName = this.lastName,
    change = false
  ) {
    if (change) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    return firstName + ' ' + lastName;
  }
}

let pesho = new Person('Pesho', 'Ivanov');
console.log(pesho, pesho.fullName());

pesho.lastName = 'Kirilov';
console.log(pesho, pesho.fullName());

pesho.fullName('Pesho', 'Petrov', true);
console.log(pesho, pesho.fullName());

pesho.fullName('Petar', 'Petrov', true);
console.log(pesho, pesho.fullName());

pesho.firstName = 'Petko';
console.log(pesho, pesho.fullName());
