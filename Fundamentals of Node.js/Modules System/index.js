var x = 10;
// console.log(x)

global.num = 20;
// console.log(num)


// Introduction to Common JS Module System

function sum(...numbers) {
    return numbers.reduce((curr, acc) => curr + acc);
}

function products(...numbers) {
    return numbers.reduce((curr, acc) => curr+acc)
}

console.log(sum(1,2,3,4,5))
console.log(products(1,2,3,4))