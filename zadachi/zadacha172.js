// Дано некоторое число: 12345 Получите массив цифр этого числа.

let num = 12345;
let strnum = num.toString();
let arr = [];

for(let char of strnum){
    let numarr = null;
    numarr = Number(char);
    arr.push(numarr);
}

console.log(arr);