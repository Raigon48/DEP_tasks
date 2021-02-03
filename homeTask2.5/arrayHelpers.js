/*
    https://www.codewars.com/kata/array-helpers
*/

Array.prototype.square = function () {
    return this.map((element) => element * element);
  };
  Array.prototype.cube = function () {
    return this.map((element) => element * element * element);
  };
  Array.prototype.average = function () {
    return this.sum() / this.length;
  };
  Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b, 0);
  };
  Array.prototype.even = function () {
    return this.filter((element) => element % 2 == 0);
  };
  Array.prototype.odd = function () {
    return this.filter((element) => element % 2 != 0);
  };