function sum(...nums){
    return nums.reduce((acc, curr) => acc + curr)
}

function sub(...nums){
    return nums.reduce((acc, curr) => acc - curr)
}

function imul(...nums){
    return nums.reduce((acc, curr) => acc * curr)
}

function idiv(...nums){
    return nums.reduce((acc, curr) => acc / curr)
}


// exports.sum = sum;
// exports.sub = sub;
// exports.imul = imul;
// exports.idiv = idiv;

// module.exports = {sum, sub, imul, idiv}; /// ---- right 
exports = {sum, sub, imul, idiv}; /// ------- wrong


