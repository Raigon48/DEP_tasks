/*
    https://www.codewars.com/kata/53583765d5493bfdf5001b35/train/javascript

*/

var Cat = (function() {
    var count = 0;
    var totalWeight = 0;
      
    function Cat(name, weight) {
      if (!name || !weight) {
        throw new Error('name and weight must be provided');
      }
      totalWeight += weight;
      count += 1;
      this.name = name;
      Object.defineProperty(this, 'weight', {
        get: function() {
          return weight;
        },
        set: function(w) {
          totalWeight -= weight - w;
          weight = w;
        }
      });
    }

    Cat.averageWeight = function() {
      return totalWeight / count;
    };
    return Cat;
  
  }());