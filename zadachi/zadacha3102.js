// Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.

const arr = [6, 9, 2, 4, 1, 5];
const num = 12;
const array = arr.filter((item) =>{
    if(num % item === 0){
        return item;
    }
});
console.log(array);