const removeFromArray = function(originalArray, ...removeItemsArray) {
    for (let removeItem of removeItemsArray) {
        if (originalArray.indexOf(removeItem) == -1) {
            continue
        } else {
            originalArray.splice(originalArray.indexOf(removeItem), 1)
        }
    }
    return originalArray
};

// Do not edit below this line
module.exports = removeFromArray;
