// Дано число. Получите массив делителей этого числа.

const num = 13;
const arr = [];
for(let i = 1; i <= num; i++){
    if( num % i === 0){
        arr.push(i);
    }
}
console.log(arr);