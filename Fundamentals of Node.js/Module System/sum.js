console.log('Hello This is Sum File!');

function sum1(...nums){
    console.log('Sum 1 called');
    return nums.reduce((acc, curr) => acc + curr)
}

function sum2(...nums){
    console.log('Sum 2 called');
    return nums.reduce((acc, curr) => acc + curr)
}

function sum3(...nums){
    console.log('Sum 3 called');
    return nums.reduce((acc, curr) => acc + curr)
}

module.exports = {sum1, sum2, sum3};
