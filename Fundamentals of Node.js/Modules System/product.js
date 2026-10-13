function products(...numbers) {
    return numbers.reduce((curr, acc) => curr+acc)
}

module.exports = [products]