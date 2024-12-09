// Дано число. Получите первую четную цифру с конца этого числа.

const num = 12345;
const str = String(num);
let num2 = '';
for(let i = str.length - 1; i >= 0; i-- ){
    if(Number(str[i]) % 2 === 0){
        num2 = str[i];
        break;
    }
}
console.log(Number(num2));
/*const num = 12345;
const arr = num.toString().split('');
const chetArr = arr.filter((item)=>{
    if(item % 2 === 0) return item;
});
console.log(chetArr.slice(-1)); */