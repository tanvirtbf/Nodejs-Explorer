var num = 54;
console.log(num);
global.nam = 52


function sum(...nums){
    console.log(nums)
    nums.reduce((acc, curr) => acc * curr)
}

sum(1,2,3,4,5,6,7,8,9,10)