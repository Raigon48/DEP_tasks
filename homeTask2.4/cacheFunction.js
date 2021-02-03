/*
    https://www.codewars.com/kata/function-cache
*/

function cache(func) {
    
    const cachedResults = {};
    return function () {
      const key = JSON.stringify(arguments);
      if (!(key in cachedResults)) {
        cachedResults[key] = func.apply(null, arguments);
      }
      return cachedResults[key];
    };
  }