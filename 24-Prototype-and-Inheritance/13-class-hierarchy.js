class Employee {
  constructor(name, age, salary, tasks) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.tasks = tasks;
  }
}

class Junior extends Employee {
  constructor(name, age, salary, tasks, profession) {
    super(name, age, salary, tasks);
    this.profession = profession;
  }

  work() {
    return `Our employee ${this.name} is on Junior level. He is working as ${this.profession}.`;
  }

  getSalary() {
    return this.salary;
  }
}

class Senior extends Employee {
  constructor(name, age, salary, tasks, profession) {
    super(name, age, salary, tasks);
    this.profession = profession;
  }

  work() {
    return `Our employee ${this.name} is on Senior level. He is working as ${this.profession}.`;
  }

  getSalary() {
    return this.salary;
  }
}

class Manager extends Employee {
  constructor(name, age, salary, tasks, experience, kpi) {
    super(name, age, salary, tasks);
    this.experience = experience;
    this.kpi = kpi;
  }

  work() {
    return `Our employee ${this.name} is on Manager level position, having ${this.experience} years of experience.`;
  }

  getSalary() {
    return this.salary;
  }

  isGettingBonus() {
    if (this.kpi >= 80) {
      return `This employee gets the bonus!`;
    } else {
      return `This employee does not get his bonus due to unsufficient performance.`;
    }
  }
}

const junior = new Junior(
  'John',
  25,
  3000,
  ['fixing bugs', 'building a new feature'],
  'developer'
);
console.log(junior.work());
console.log(junior.getSalary());

const senior = new Senior(
  'Jane',
  35,
  5000,
  ['consulting clients', 'working with Figma'],
  'designer'
);
console.log(senior.work());
console.log(senior.getSalary());

const manager = new Manager(
  'Jake',
  40,
  7000,
  ['managing the team', 'managing the project'],
  15,
  85
);
console.log(manager.work());
console.log(manager.getSalary());
console.log(manager.isGettingBonus());
