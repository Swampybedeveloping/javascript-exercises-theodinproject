const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((total,  current) => total+current, 0)
};
// reduce => (function, start value)
const multiply = function(arr) {
	return arr.reduce((product, current) => product * current) // safer implementation than product *= current
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(a) {
	if (a === 0) return 1;
  let product = 1
  for (let i=a; i>0; i--){
    product *= i;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
