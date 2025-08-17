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


module.exports.sum = sum;
module.exports.sub = sub;
module.exports.imul = imul;
module.exports.idiv = idiv;