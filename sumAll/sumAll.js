const sumAll = function (a, b) {
    // sumAll(1, 4) or (a, b) // returns the sum of 1 + 2 + 3 + 4 which is 10
    // 1. make a variable to store the sum (sumOf)
    // 2. loop through (a) to (b) while adding eveyr number in between to (sumOf)
    // 3. return (sumOf)

    let sum = 0;
    let biggerNum;
    let smallerNum;

    // check negative or is-not-a-number
    if (a < 0 || b < 0) return ('ERROR');
    if (typeof a !== "number" || typeof b !== "number") return ('ERROR');

    // check the bigger and smaller
    if (a > b) {
        biggerNum = a;
        smallerNum = b;
    } else if (a < b) {
        biggerNum = b;
        smallerNum = a;
    }

    // main:
    for (let i = smallerNum; i <= biggerNum; i++) {
        sum += i;
    };

    return (sum);
}


module.exports = sumAll