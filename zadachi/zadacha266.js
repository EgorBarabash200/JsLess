/* Дана некоторая строка со словами:

'aaa bbb ccc eee fff'
Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:

'aaa Bbb ccc Eee fff' */

const str = 'aaa bbb ccc eee fff';
const arrStr = str.split(' ');
const arr = arrStr.map((item,index) =>{
    if(index % 2 !== 0){
        const text = item[0].toUpperCase() + item.slice(1);
        return text;
    }else{
        return item;
    }
});
console.log(arr.join(' '));