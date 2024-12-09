/* Дано некоторое число, например, такое:

123789
Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:

28 */
const num = 123789;
const str = String(num);
let num2 = '';
for(let i = 0; i < str.length; i++){
    if(Number(str[i]) % 2 === 0) num2 += str[i];
}
console.log(Number(num2));
/*
const num = 123789;
const arr = num.toString().split('');
const numArr = arr.filter(item=>{ if(item % 2 === 0) return item ;});
const newNum = numArr.join('');
console.log(Number(newNum)); */