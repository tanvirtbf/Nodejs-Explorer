const sum = require('./sum')
const sub = require('./subtract')
const mul = require('./multiply')
const div = require('./divide')

// console.log(module.exports)

// module.exports = { sum, sub }



// module.exports = { sum, sub , mul, div }
// module.exports = [sum, sub, mul, div]

// module.exports.sum = sum;
// module.exports.sub = sub;
// module.exports.mul = mul;
// module.exports.div = div;


// exports.sum = sum;

console.log(module.exports) // {}

// module.exports = { sum, sub, mul, div }
module.exports.sum = sum;
module.exports.mul = mul;

console.log(module.exports) // { sum:...., mul:....} // tar mane holo module.exports first obosthay khali thake . then tar vitor ja press kora hoy ta dhuke jay 