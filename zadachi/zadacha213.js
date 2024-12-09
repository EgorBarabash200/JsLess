// Дан массив. Удалите из него элементы с заданным значением.

const arr = [1, 2, 3, 4, 2, 6];
const numDel = 2;
const res = arr.filter(item => item !== numDel);
console.log(res);