// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

let num = 123;
let strnum = num.toString();
let res = Number(strnum.at(0)) + Number(strnum.at(-1));
console.log(res);