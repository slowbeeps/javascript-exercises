const reverseString = function(string_) {
    let splitArray = string_.split('');
    let revArray = splitArray.reverse();
    let jointRevArrStr = revArray.join('');
    return(jointRevArrStr)
}

module.exports = reverseString
