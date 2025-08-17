const {sum, sub, imul, idiv} = require("./math");


setInterval(() => {
    console.log(sum(5, 7));
    console.log(sub(5, 7));
    console.log(imul(5, 7));
    console.log(idiv(5, 7));
}, 1000)



