const sumAll = function(numOne, numTwo) {
    if (numOne < 0 || numTwo < 0) {
        return "ERROR"
    } else if (typeof numOne != "number" || typeof numTwo != "number") {
        return "ERROR"
    }

    let highNum = 0
    let lowNum = 0
    let sum = 0

    if (numOne < numTwo) {
        lowNum = numOne
        highNum = numTwo
    } else if (numOne > numTwo) {
        lowNum = numTwo
        highNum = numOne
    } else {
        return "ERROR"
    }

    for (let i = 0; i <= (highNum - lowNum); i++) {
        sum += lowNum + i 
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
