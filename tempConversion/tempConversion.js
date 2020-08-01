const ftoc = function (inF) {
    // [C] = ([F] − 32) × ​5⁄9
    let toC = (inF - 32) * 5 / 9;
    var inC = toC.toFixed(1);
    return (+inC);
}
ftoc(100);
console.log(typeof(inC))


const ctof = function (inC) {
    // [F] = [C] × ​9⁄5 + 32	
    let toF = (inC * 9 / 5) + 32;
    let inF = toF.toFixed(1);
    return (+inF);
}

module.exports = {
    ftoc,
    ctof
}