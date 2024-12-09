// Дана строка. Проверьте, что эта строка состоит только из четных цифр.

const str = '2468';

for(let i = 0; i < str.length; i++){
    if(isNaN(Number(str[i])) === false && Number(str[i]) % 2 === 0){
        console.log(`Строка состоит из чётных цифр ${str[i]}`);
    }else{
        console.log(`В строке есть не числовой элемент или нечётная цифра ${str[i]}`);
    }
}