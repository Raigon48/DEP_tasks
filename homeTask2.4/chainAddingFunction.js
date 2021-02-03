/*
    https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript
*/

var add = function(num) {
    const fn = x => add(num + x)
    fn.valueOf = () => num
    return fn;
  }