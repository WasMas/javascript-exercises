const removeFromArray = function (arrayToCheck, ...items) {
    for (let i = 0; i < arrayToCheck.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if (arrayToCheck[i] === items[j]) {
                arrayToCheck.splice(i, 1);
                i = 0;
            }
        }
    }
    return arrayToCheck;
};

// Do not edit below this line
module.exports = removeFromArray;
