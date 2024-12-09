/* Дано число, например, вот такое:

let num = 12345;
Проверьте, что все цифры этого числа больше нуля. */

let num = 12345;
const str = String(num);
for(let i = 0; i < str.length; i++) str[i] > 0 ? 
console.log(`Число: ${str[i]} больше 0`):
 console.log(`Число: ${str[i]} не больше 0`);    
