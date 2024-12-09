// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.

const str = '1ad4fds6sd7';
const arrStr = str.split('');
const arr = [];
arrStr.forEach((item, index)=>{
    if(isNaN(Number(item)) === false) arr.push(index);
});
console.log(arr);