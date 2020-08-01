const repeatString = function (string_, numberOfTimes) {
    if (numberOfTimes < 0) {
        return ('ERROR')
    } else {
        let result = '';
        for (let i = 1; i <= numberOfTimes; i++) {
            result += string_;
        }
        return (result);
    }
}

module.exports = repeatString