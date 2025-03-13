const sumAll = function(x, y) {
    for (value of [x, y]) {
        if (
            typeof value !== "number" ||
            value < 0 ||
            Math.floor(value) != value
        ) {
            return 'ERROR';
        }
    }

    let newSum = 0;
    if ((x - y) % 2 === 0) {
        newSum = (x + y) * (Math.abs(x - y) / 2) + ((x + y) / 2);
    } else {
        newSum = (x + y) * Math.ceil(Math.abs(x - y) / 2);
    }

    return newSum;
};

// Do not edit below this line
module.exports = sumAll;