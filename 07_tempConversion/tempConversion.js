const convertToCelsius = function(temp) {
  convertedTemp = (temp - 32) * 5 / 9
  roundedTemp = Math.round(convertedTemp * 10) / 10
  return roundedTemp
};

const convertToFahrenheit = function(temp) {
  convertedTemp = temp * (9/5) + 32
  roundedTemp = Math.round(convertedTemp * 10) / 10
  return roundedTemp
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
