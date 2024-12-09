/* ана некоторая строка:

'AbCdE'
Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:

'aBcDe' */
/*
const str = 'AbCdE';
const arr = str.split('');
const newArr = arr.map((item, index) =>{
    if(index % 2 !== 0){
        return item.toUpperCase();
    }else{
        return item.toLowerCase();
    }
});
console.log(newArr.join('')); */

const str = 'AbCdE';
let str2 = '';
for( let i = 0; i < str.length; i++){
    str2 += ( i % 2 !== 0? str[i].toUpperCase(): str[i].toLowerCase());
}
console.log(str2);