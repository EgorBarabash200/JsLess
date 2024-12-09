/* Дана некоторая строка, например, вот такая:

'023m0df0dfg0'
Получите массив позиций всех нулей в этой в строке.*/

const str = '023m0df0dfg0';
const arrStr = str.split('');
const arr = [];
 arrStr.forEach((item, index)=>{
    if(item === '0') arr.push(index);
});
console.log(arr);
