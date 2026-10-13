const sum = require('./sum')
const products = require('./product')

var x = 10;
// console.log(x)

global.num = 20;
// console.log(num)


// Introduction to Common JS Module System



console.log(sum(1,2,3,4,5))
console.log(products[0](1,2,3,4))