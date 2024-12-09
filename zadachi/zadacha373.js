// Даны два числа. Получите массив общих делителей этих чисел.

const num1 = 12;
const num2 = 6;
const arr = [];
let num = 0;
num1 <= num2? num = num2: num = num1;
for(let i = 1; i <= num; i++){
    if( num1 % i === 0 && num2 % i === 0 ){
        arr.push(i);
    }
}
console.log(arr);