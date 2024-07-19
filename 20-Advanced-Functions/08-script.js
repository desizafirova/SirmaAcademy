//Create an object with methods that manipulate a string (e.g., toUpperCase, toLowerCase).
//Ensure the methods return this so the methods can be chained together.

const stringManipulator = {
  result: '',
  setValue(str) {
    this.result = str;
    return this;
  },

  toUpperCase() {
    this.result = this.result.toUpperCase();
    return this;
  },

  print() {
    console.log(this.result);
    return this;
  },

  toLowerCase() {
    this.result = this.result.toLowerCase();
    return this;
  },
};

stringManipulator.setValue('Hello').toUpperCase().print().toLowerCase().print();

// HELLO
//  hello
