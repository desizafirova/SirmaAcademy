String.prototype.ensureStart = function (str) {
  return str + ' ' + this;
};

String.prototype.ensureEnd = function (str) {
  return this + ' ' + str;
};

String.prototype.isEmpty = function () {
  if (this.length === 0) {
    return true;
  } else {
    return false;
  }
};

String.prototype.capitalize = function () {
  if (this.length === 0) return;
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.truncateWords = function (n) {
  if (this.length === 0) return;
  let arr = this.split(' ');
  let truncateStr = [];
  for (let i = 0; i < n; i++) {
    truncateStr.push(arr[i]);
  }

  if (arr.length > truncateStr.length) {
    return truncateStr.join(' ') + '...';
  } else {
    return truncateStr.join(' ');
  }
};

let str = 'javaScript is awesome language!';
console.log(str.ensureStart('I know you know that...'));
console.log(str.ensureEnd('Do you agree?'));
console.log(str.isEmpty());
console.log(str.capitalize());
console.log(str.truncateWords(2));
console.log(str.truncateWords(6));
