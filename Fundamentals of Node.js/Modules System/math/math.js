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

// console.log(module.exports) // {}

// // module.exports = { sum, sub, mul, div }
// module.exports.sum = sum;
// module.exports.mul = mul;

// console.log(module.exports) // { sum:...., mul:....} // tar mane holo module.exports first obosthay khali thake . then tar vitor ja press kora hoy ta dhuke jay 




// console.log(module.exports === exports) // true

// var tanvir = module.exports ;

// tanvir.sum = sum;
// tanvir.mul = mul;
// etar karon ki ? karon exports object ta asheii var exports = module.exports er maddhome . jar karone exports object diye kono kichu change korle module.exports eo seta aisha pore . 



// module.exports vs exports 

module.exports = {
    sum, mul
} // This is Okay 

// exports = {
//     sum,
//     mul,
// } // But This is not Okay 

// Karon hoilo module.exports theke exports hoy evabe => var exports = module.exports . aijonno module.exports er value reference soho copy hoy exports variable e store hoy . tai exports er value and module.exports er value same + reference same . tai exports change hoile module.exports o change hoy . kintu jodi exports er moddhe equal to(=) diye new object create kori tokhon se ager refence chere diye notun kore ekta refence create kore . seta hok string or object . tai tokhon kaj kore na 

