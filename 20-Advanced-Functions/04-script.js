// Create two functions, one that doubles a number and one that squares a number.
// Create a third function that composes these two functions to first double and then square a number.

function double(num) {
  return num * 2;
}

function square(num) {
  return num * num;
}

function compose(...funcs) {
  return function (arg) {
    return funcs.reduce((acc, fn) => fn(acc), arg);
  };
}

const doubleThenSquare = compose(double, square);

console.log(doubleThenSquare(3)); // Output: 36
