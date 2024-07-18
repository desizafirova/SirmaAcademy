// Create a function that returns an object with two methods: one to get a private variable and one to set it.
// Use a closure to maintain the private variable.

function createPrivateCounter() {
  let counter = 0;
  return {
    increment() {
      counter++;
    },
    getCount() {
      return counter;
    },
  };
}
const counter = createPrivateCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1
