// Дана строка. Удалите предпоследний символ из этой строки.
/*
const str = 'world';
const arrStr = str.split('');
arrStr.splice(-2, 1);
console.log(arrStr.join(''));
*/

const str = 'world';
let str2 = '';
for( let i = 0 ; i < str.length; i++){
    if(str[i] !== str.slice(-2, -1)) str2 += str[i];
}
console.log(str2);