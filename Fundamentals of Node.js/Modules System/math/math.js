const sum = require('./sum')
const sub = require('./subtract')
const mul = require('./multiply')
const div = require('./divide')

// console.log(module.exports)

// module.exports = { sum, sub }



// module.exports = { sum, sub , mul, div }
// module.exports = [sum, sub, mul, div]

module.exports.sum = sum;
module.exports.sub = sub;
module.exports.mul = mul;
module.exports.div = div;
