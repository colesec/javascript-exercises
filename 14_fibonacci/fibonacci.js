const fibonacci = function(num) {
  let current;
  let previous = 1;
  let secondPrevious = 0;

  for(let i=1; i<=num; i++){
    current = previous + secondPrevious;
    secondPrevious = previous;
    previous = current;
  }

  return current;
};

// Do not edit below this line
module.exports = fibonacci;

1, 1, 2, 3, 4, 5