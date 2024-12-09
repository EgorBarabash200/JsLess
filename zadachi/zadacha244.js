/* Дана некоторая строка:

'abcde'
Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:

'AbCdE' */

const str = 'abcde';
let str2 = '';
for(let i = 0; i < str.length; i++){
    str2 += (i % 2 === 0 ? str[i].toUpperCase() : str[i]);
}
console.log(str2);


/*
const arrStr = str.split('');
const arr = arrStr.map((item,index) =>{
    if(index % 2 === 0){
        return item.toUpperCase();
    }else{
        return item.toLowerCase();
    }
}); 

console.log(arr.join('')); */
