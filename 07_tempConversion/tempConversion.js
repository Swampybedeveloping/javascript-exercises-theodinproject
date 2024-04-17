const convertToCelsius = function(Ffh) {
  // (F-32)*(5/9)
  let celcius = ((Number(Ffh)-32) * (5/9));
  return celcius.toFixed(1);
};

const convertToFahrenheit = function(cel) {
  // (C*(9/5)+32)
  let fahrenheit = ((cel * (9/5)) + 32);
  return fahrenheit.toFixed(1);
}; 

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
