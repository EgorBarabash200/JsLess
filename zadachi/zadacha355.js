/*Дано некоторое число:

35142
Отсортируйте цифры этого числа. В нашем случае должно получится следующее:

12345 */

const num = 35142;
const arr = String(num).split('');
console.log(arr.sort((a, b)=> a - b).join(''));