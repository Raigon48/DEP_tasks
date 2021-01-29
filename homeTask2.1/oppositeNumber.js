// https://www.codewars.com/kata/opposite-number

function opposite(num) {
    if(isNaN(num)) {
      throw new Error("Must be a number");
    }
    return -num;
  }