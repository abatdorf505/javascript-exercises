const convertToCelsius = function(tempF) {
  let tempC = (tempF - 32) * (5 / 9);
  if (!Number.isInteger(tempC)) {
    tempC = parseFloat(tempC.toFixed(1));
  }
  return tempC;
};

const convertToFahrenheit = function(tempC) {
  let tempF = tempC * (9 / 5) + 32;
  if (!Number.isInteger(tempF)) {
    tempF = parseFloat(tempF.toFixed(1));
  }
  return tempF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
