/* Дана некоторая строка со словами:

'aaa bbb ccc'
Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:

'Aaa Bbb Ccc' */

const str = 'aaa bbb ccc';
const arrStr = str.split(' ');
console.log(arrStr);
const arr = arrStr.map((item) =>{
        const text = item[0].toUpperCase() + item.slice(1);
        console.log(item.slice(1));
        console.log(item[0])
        return text;
});
console.log(arr.join(' '));
/*const str2 = arr.join('');
const arrStr2 = str2.split('');
console.log(arrStr2); */

/*const str = 'aaa bbb ccc';
const arrStr = str.split('');
console.log(arrStr);
let num = 0;
const arr = arrStr.map((item, index) =>{
        if(index === 0){
            return item.toUpperCase();
        }else if(item === ' '){
            return item.toUpperCase();
        }else{
            return item.toLowerCase();
        }
}); */
