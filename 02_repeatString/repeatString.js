const repeatString = function (word, number) {
    let wordRepeat = "";
    if (number < 0) {
        return "ERROR";
    }
    for (let i = 0; i < number; i++) {
        wordRepeat += word;
    }
    return wordRepeat;
};

// Do not edit below this line
module.exports = repeatString;
