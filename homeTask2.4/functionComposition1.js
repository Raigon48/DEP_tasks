/*
    https://www.codewars.com/kata/function-composition-1
*/

function compose(...funcs) {
    return function (num) {
      return funcs.reduceRight((acc, fn) => fn(acc), num);
    }
}