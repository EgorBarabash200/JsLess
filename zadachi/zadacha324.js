/* Дана некоторая строка со словами:

'aaa bbb ccc eee fff'
Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:

'aaa ccc fff' */

const str = 'aaa bbb ccc eee fff';
const strArr = str.split(' ');
const arr = strArr.filter((item, index)=>{
    if(index % 2 === 0){
        return item;
    }
}) ;
console.log(arr.join(' '));