/*
    https://www.codewars.com/kata/function-cache
*/

function cache(func) {
    
    let cachedResults = {};
    return function () {
      let key = JSON.stringify(arguments);
      if (!(key in cachedResults)) {
        cachedResults[key] = func.apply(null, arguments);
      }
      return cachedResults[key];
    };
  }