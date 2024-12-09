/* Дано некоторое слово:

'abcba'
Проверьте, что это слово читается одинаково с любой стороны. */

const str = 'abcba';
const arr = str.split('');
if(str === arr.reverse().join('')){
    console.log(`${str} и ${arr.reverse().join('')} читается одинакого с любой стороны`);
}else{
    console.log(`${str} и ${arr.reverse().join('')} не читается одинакого с любой стороны`);
}