/* Дан некоторый массив, например, вот такой:

[1, 2, 3, 4, 5, 6]
Найдите сумму первой половины элементов этого массива. */

const arr = [1, 2, 3, 4, 5, 6];
let sum = 0;
arr.forEach((item, index)=>{
    if(index <= 2) sum += item;
});
console.log(sum);