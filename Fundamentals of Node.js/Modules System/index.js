// const sum = require('./sum')
// const products = require('./product')

// var x = 10;
// // console.log(x)

// global.num = 20;
// // console.log(num)


// // Introduction to Common JS Module System

// console.log(sum(1,2,3,4,5))
// console.log(products[0](1,2,3,4))

// const sum = require("./sum")

// Question : require function ki return kore ? 
// Answer : './sum' file e thaka module.exports ja return kore setaii require function er return value 


// console.log(typeof(sum))


// const sum = require('./math/sum')
// const sub = require('./math/subtract')
// const mul = require('./math/multiply')
// const div = require('./math/divide')

// console.log(sum(1,2,3))
// console.log(sub(1,2,3))
// console.log(mul(1,2,3))
// console.log(div(1,2,3))



// const math = require('./math/math')

// console.log(math.sum(1,2,3,4))
// console.log(math.sub(1,2,3,4))
// console.log(math.mul(1,2,3,4))
// console.log(math.div(1,2,3,4))


// const math = require('./math/math')

// console.log(math[0](1,2,3,4))
// console.log(math[1](1,2,3,4))
// console.log(math[2](1,2,3,4))
// console.log(math[3](1,2,3,4))



// const math = require('./math/math')

// console.log(math.sum(1,2,3,4))
// console.log(math.sub(1,2,3,4))
// console.log(math.mul(1,2,3,4))
// console.log(math.div(1,2,3,4))


// const { sum, sub, mul, div } = require('./math/math')

// console.log(sum(1,2,3,4))
// console.log(sub(1,2,3,4))
// console.log(mul(1,2,3,4))
// console.log(div(1,2,3,4))


// Module.exports VS Exports

// const { sum } = require('./math/math')

// console.log(sum(1,2,3,4))

// Let's Practice module.exports and exports first 