// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

let arr = ["http://hors", "fjafdkwohttp://", "http://utresa", "dffrshttp://kmvkfs"];

let newarr = arr.filter(item => item.startsWith('http://'))
console.log(newarr);