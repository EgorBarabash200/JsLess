// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.

const str = 'dacm1kcd3kc5';
for(let i = 0; i < str.length; i++){
    if(isNaN(Number(str[i])) === false){
        console.log(i);
        break;
    }
}