// Дана строка. Проверьте, что эта строка состоит только из цифр.

const str = '12342';

for(let i = 0; i < str.length; i++){
    if(isNaN(Number(str[i])) === false){
        console.log( `Строка состоит из числа ${str[i]} ` );
    }else{
        console.log(`В строке есть не числовой элемент ${str[i]}`);
    }
}