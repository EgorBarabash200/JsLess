// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.

const arr = [1, -2, 4, 7, -9, -5, 0];

const negNum = arr.filter(item => item < 0);

console.log(negNum.length);