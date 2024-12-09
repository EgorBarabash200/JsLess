// Дано число. Выведите в консоль количество четных цифр в этом числе.

const num = 1234;
const striNum= num.toString();
let res = 0;
for( let i = 0; i < striNum.length; i++){         // toString(num) глючит
   if(Number(striNum[i]) % 2 === 0)  res++;
}
console.log(res);