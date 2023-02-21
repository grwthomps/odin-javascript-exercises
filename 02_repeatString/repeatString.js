const repeatString = function(string, repeatNum) {
    if (repeatNum >= 0) {
        return string.repeat(repeatNum);
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
