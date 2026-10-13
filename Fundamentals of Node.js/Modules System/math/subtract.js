function subtract(...nums) {
    return nums.reduce((curr, acc) => curr - acc)
}

module.exports = subtract;