// Дан массив с числами. Оставьте в нем только положительные числа.

const arr = [1, -2, 4, 7, -9, -5, 0];

const posNum = arr.filter(item => item >= 0 );

console.log(posNum);