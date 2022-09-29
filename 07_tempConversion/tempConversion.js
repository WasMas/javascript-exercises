const ftoc = function (temperatureF) {
    temperatureC = ((temperatureF - 32) * 5) / 9;
    return Number(temperatureC.toFixed(1));
};

const ctof = function (temperatureC) {
    temperatureF = (temperatureC * 9) / 5 + 32;
    return Number(temperatureF.toFixed(1));
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof,
};
