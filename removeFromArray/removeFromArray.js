const removeFromArray = function (...theArgs) {
    // I need to remove every element from userArray that comes after it and return it.
    // So i'll make a resultsArray and add every item in userArray to it if it's not in arguments array.
    // what I'll need: 
    // loop through each item of the userArray 
    // a way to check if an item is included in arguments array 
    // if it's not in arguments array then push it into the resultsArray
    let resultsArray = [];
    let userArray = theArgs[0];

    function checkArguments(value) {
        if (theArgs.includes(value) === false) {
            resultsArray.push(value);
        };
    };
    userArray.forEach(checkArguments);
    return resultsArray;
}

module.exports = removeFromArray