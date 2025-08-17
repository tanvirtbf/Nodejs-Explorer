function sum(...nums){
    return nums.reduce((acc, curr) => acc+curr)
}

module.exports = sum;
