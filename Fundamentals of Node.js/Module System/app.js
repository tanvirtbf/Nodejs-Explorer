// একবার require করলে পুরো sum.js execute হবে
const sum1 = require("./sum");  
const sum2 = require("./sum");  
const sum3 = require("./sum");  

console.log("----- Calling function multiple times -----");

// function বারবার call করা হচ্ছে
console.log("Result 1:", sum1(2, 3));
console.log("Result 2:", sum2(5, 7));
console.log("Result 3:", sum3(10, 20));
