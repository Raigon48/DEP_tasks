/*
    https://www.codewars.com/kata/santaclausable-interface
*/

function isSantaClausable(obj) {
    return ["sayHoHoHo", "distributeGifts", "goDownTheChimney"].every(
      (functionName) => typeof obj[functionName] == "function"
    );
  }