/* Даны числа, разделенные запятыми:

'12,34,56'
Найдите сумму этих чисел. */

const str = '12,34,56';
const arr = str.split(',');
let res = 0;
arr.forEach(item=> res += Number(item));
console.log(res);

