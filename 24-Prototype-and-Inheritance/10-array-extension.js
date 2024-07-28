/*
Extend the built-in Array object with additional functionality. Implement the following methods:
first(): returns the first element of the array.
skip(n): returns a new array excluding the first n elements.
take(n): returns a new array containing the first n elements.
product(): returns the product of all array elements.
unique(): returns a new array with unique elements.
Structure your code as an IIFE to add these methods to the Array prototype.
*/

(function () {
  Array.prototype.first = function () {
    return this[0];
  };

  Array.prototype.skip = function (n) {
    let newArray = [];
    for (let i = n; i < this.length; i++) {
      newArray.push(this[i]);
    }

    return newArray;
  };

  Array.prototype.take = function (n) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
      newArr.push(this[i]);
    }
    return newArr;
  };

  Array.prototype.product = function () {
    let arrayProduct = 1;
    for (let i = 0; i < this.length; i++) {
      arrayProduct *= this[i];
    }
    return arrayProduct;
  };

  Array.prototype.unique = function () {
    let uniqueArr = [];
    this.forEach((element) => {
      if (!uniqueArr.includes(element)) {
        uniqueArr.push(element);
      }
    });

    return uniqueArr;
  };
})();

const arrTest = [2, 4, 6, 7, 8, 9, 77, 6, 7, 2];

console.log(arrTest.first());
console.log(arrTest.skip(5));
console.log(arrTest.take(4));
console.log(arrTest.product());
console.log(arrTest.unique());
