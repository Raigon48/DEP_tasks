// https://www.codewars.com/kata/basic-mathematical-operations

function basicOp(operation, value1, value2) {
    let result;
    switch (operation) {
      case "+":
        result = value1 + value2;
        break;
      case "-":
        result = value1 - value2;
        break;
      case "*":
        result = value1 * value2;
        break;
      case "/":
        if(value2 == 0) {
          throw new Error("Denominator can't be zero.")
        }
        result = value1 / value2;
        break;
      default : 
        result = "Enter proper operation( +, -, *, /)"
        break;
    }
    return result;
  }