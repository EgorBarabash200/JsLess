// Дано некоторое число: 12345 Найдите сумму цифр этого числа.

let num = 12345;
let strnum = num.toString();
let res = 0;

for(let i of strnum){
    res += Number(i); 
}

console.log (res);