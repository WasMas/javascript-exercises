const sumAll = function (a, b) {
    let sum = 0;
    if (
        Number.isInteger(a) &&
        Number.isInteger(b) &&
        Math.sign(a) == 1 &&
        Math.sign(b) == 1
    ) {
        if (a < b) {
            for (let i = a; i < b + 1; i++) {
                sum += i;
            }
            return sum;
        } else {
            for (let i = b; i < a + 1; i++) {
                sum += i;
            }
            return sum;
        }
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
