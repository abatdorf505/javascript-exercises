const removeFromArray = function(array, ...values) {
    for (value of values) {
        while (array.includes(value)) {
            let index = array.indexOf(value);
            array.splice(index, 1)
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
