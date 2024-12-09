/* Дана некоторая строка:

'abcdefg'
Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:

'abdeg' */

const str = 'abcdefg';
let num = 1;
let text = '';
for(let i = 0; i < str.length; i++){
    if(num % 3 !== 0){
        text += str[i];
    } 
    num++ 
}                             
console.log(text);
