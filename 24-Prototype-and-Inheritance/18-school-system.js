class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, age, grade, school) {
    super(name, age);
    this.grade = grade;
    this.school = school;
  }
  study() {
    console.log(
      `${this.name}, ${this.age} - student at ${this.school}. Grade ${this.grade}. `
    );
  }
}

class Teacher extends Person {
  constructor(name, age, subject, salary) {
    super(name, age);
    this.subject = subject;
    this.salary = salary;
  }

  teach() {
    console.log(
      `Our teacher, ${this.name}, is ${this.age} years old, teaching ${this.subject} and earning $${this.salary} per month.`
    );
  }
}

const student1 = new Student('John', 15, 'B', 'American School of Bulgaria');
student1.study();

const teacher1 = new Teacher('Mr. Peterson', 53, 'English', 4000);
teacher1.teach();
