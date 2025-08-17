const sum = require("./sum");


setInterval(() => {
    console.log(sum.sum2(5, 7));
    console.log(sum.sum1(5, 7));
    console.log(sum.sum1(5, 7));
}, 1000)

