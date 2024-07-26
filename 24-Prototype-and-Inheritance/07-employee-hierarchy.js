class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

class Manager extends Employee {
  constructor(name, salary, kpi = false) {
    super(name, salary);
    this.kpi = kpi;
  }

  calcBonuses() {
    if (this.kpi) {
      return 'Bonus:' + ' ' + this.salary * 0.2;
    } else {
      return 'Bonus: none;';
    }
  }
}

class Engineer extends Employee {
  constructor(name, salary, performanceRating) {
    super(name, salary);
    this.performanceRating = performanceRating;
  }

  calcBonuses() {
    if (75 < this.performanceRating && this.performanceRating <= 100) {
      return 'Bonus:' + ' ' + this.salary * 0.2;
    } else {
      return 'Bonuses: none;';
    }
  }
}

const engineer1 = new Engineer('Pesho', 3500, 80);
const engineer2 = new Engineer('Kiro', 3500, 50);
console.log(engineer1, engineer1.calcBonuses());
console.log(engineer2, engineer2.calcBonuses());

const manager1 = new Manager('Ivan', 5000, true);
const manager2 = new Manager('Kalin', 6000);
console.log(manager1, manager1.calcBonuses());
console.log(manager2, manager2.calcBonuses());
