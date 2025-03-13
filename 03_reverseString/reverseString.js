const reverseString = function(string) {
    let newArray = string.split('');
    newArray = newArray.reverse();
    let newString = newArray.join('');

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
