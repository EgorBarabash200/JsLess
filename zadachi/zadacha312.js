/* Дан массив:

[1, '', 2, 3, '', 5]
Удалите из массива все пустые строки. */

const arr = [1, '', 2, 3, '', 5];
const newArr = arr.filter(item => item !== '');
console.log(newArr);