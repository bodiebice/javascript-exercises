const convertToCelsius = function(fahrenheit) {
  let celsiusTemp = ((fahrenheit - 32) * (5/9));
  return(Math.round(celsiusTemp*10)/10);
};

const convertToFahrenheit = function(celsius) {
  let fahrenheitTemp = ((celsius*9/5)+32);
  return(Math.round(fahrenheitTemp*10)/10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
