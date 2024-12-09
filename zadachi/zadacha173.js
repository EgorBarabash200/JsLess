// Дано некоторое число: 12345 Переверните его: 54321

let num = 12345;
let arr = [];
let numstr = num.toString();

for(let i of numstr){
    arr.unshift(i);
}
let res = +arr.join('')
console.log(res);
